import { View, Text, Image } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { CustomInput } from '@/components/CustomInput';
import { CustomButton } from '@/components/CustomButton';
import { useLogin } from '@/src/api/mutations/useLogin';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: loginMutation, isPending } = useLogin();
  const handleLogin = () => {
    if (email && password) {
      loginMutation({ email, password });
    }
  };

  return (
    <ScreenWrapper className="flex-1 justify-center px-6">
      <View className="flex-row items-center">
        <Image 
          source={require('../assets/logo.png')} 
          className="w-10 h-10 mr-2 rounded-lg bg-surface" 
          resizeMode="contain" 
        />
        <View>
          <Text className="text-text font-bold text-lg leading-tight">Opti Bovino</Text>
          <Text className="text-muted text-xs uppercase tracking-widest">Ciencia para tu hato</Text>
        </View>
      </View>
      <View className="mb-10">
        <Text className="text-4xl font-bold text-text mb-2">OpniBovino</Text>
        <Text className="text-base text-muted">Ingresa a tu cuenta para continuar</Text>
      </View>

      <View className="space-y-4">
        <CustomInput
          label="Correo electrónico"
          placeholder="usuario@ejemplo.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          editable={!isPending}
        />
        
        <CustomInput
          label="Contraseña"
          placeholder="********"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          editable={!isPending}
        />
      </View>

      <View className="mt-8">
        <CustomButton 
          title={isPending ? "Cargando..." : "Iniciar Sesión"} 
          onPress={handleLogin} 
          className="w-full bg-primary py-4 rounded-xl items-center" 
          textClassName="text-textbutton font-bold text-lg"
          disabled={isPending}
        />
      </View>

      <View className="mt-8 items-left">
        <Text className="text-muted">
          ¿No tienes cuenta?{' '}
          <Text 
            className="text-primary font-bold" 
            onPress={() => router.push('/(auth)/register' as any)}
          >
            Regístrate
          </Text>
        </Text>
      </View>
    </ScreenWrapper>
  );
}