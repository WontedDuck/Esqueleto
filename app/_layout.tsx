import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useAuthStore } from '@/src/store/authStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../global.css'; 

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const [isReady, setIsReady] = useState(false);
  const { isAuthenticated, hydrate } = useAuthStore();

  const [fontsLoaded, fontError] = useFonts({
    //'Inter-Regular': require('../assets/fonts/fuentes.ttf'),
  });

  useEffect(() => {
    hydrate().finally(() => {
      setIsReady(true);
    });
  }, []);

  useEffect(() => {
    if (!fontsLoaded && !fontError) return;
    if (!isReady) return;
    SplashScreen.hideAsync();
    const inMainGroup = segments[0] === '(main)';
    const inAuthGroup = segments[0] === '(auth)';
    if (!isAuthenticated && inMainGroup) {
      router.replace('/(auth)/login' as any);
    } else if (isAuthenticated && inAuthGroup) {
      router.replace('/(main)' as any);
    }
  }, [isAuthenticated, segments, fontsLoaded, fontError, isReady]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  if (!isReady) return null;
  
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(main)" />
      </Stack>
    </QueryClientProvider>
  );
}