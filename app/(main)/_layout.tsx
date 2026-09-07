import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useRouter, usePathname } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useAuthStore } from '@/src/store/authStore';
import { APP_CONFIG } from '@/src/config/app.config';

function CustomDrawerContent(props: any) {
  const { logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  const screens = [
    { name: '', route: '/(main)', title: 'Resumen', icon: 'bar-chart-2' },
    { name: 'herd', route: '/(main)/herd', title: 'Mis animales', icon: 'users' },
  ];

  return (
    <View className="flex-1 bg-primary">
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        <View className="flex-row items-center justify-between p-6 pt-16 mb-4">
           <View className="flex-row items-center">
             <Image source={require('../../assets/logo.png')} className="w-10 h-10 rounded-lg bg-surface mr-3" resizeMode="contain" />
             <View>
                <Text className="text-textbutton font-bold text-base">{APP_CONFIG.name}</Text>
                <Text className="text-secondary text-[10px] uppercase tracking-widest">{APP_CONFIG.slogan}</Text>
             </View>
           </View>
           <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
             <Feather name="x" size={24} className="text-secondary" />
           </TouchableOpacity>
        </View>

        <View className="px-4">
          {screens.map((screen) => {
            const isActive = pathname === `/(main)/${screen.name}` || (screen.name === 'index' && pathname === '/(main)');
            return (
              <TouchableOpacity
                key={screen.name}
                onPress={() => router.push(`/(main)/${screen.name}` as any)}
                className={`flex-row items-center px-4 py-3 rounded-xl mb-1 ${isActive ? 'bg-secondary' : ''}`}
              >
                <Feather 
                  name={screen.icon as any} 
                  size={20} 
                  className={isActive ? 'text-textbutton' : 'text-background'} 
                />
                <Text className={`font-bold ml-4 ${isActive ? 'text-textbutton' : 'text-background'}`}>
                  {screen.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </DrawerContentScrollView>

      <View className="p-6 pb-12 border-t border-secondary/20">
        <View className="bg-secondary/20 p-4 rounded-xl mb-6">
          <Text className="text-textbutton font-bold">Miguel Angel</Text>
          <Text className="text-secondary text-xs">Rancho El Roble</Text>
        </View>
        <TouchableOpacity onPress={logout} className="flex-row items-center px-4">
          <Feather name="log-out" size={20} className="text-secondary" />
          <Text className="text-secondary font-bold ml-3">Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function MainLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: 'transparent', width: '85%' },
      }}
    >
      <Drawer.Screen name="index" />
      <Drawer.Screen name="herd" />
    </Drawer>
  );
}