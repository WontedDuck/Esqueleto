import { View, Text, Alert, Image } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { CustomInput } from '@/components/CustomInput';
import { CustomButton } from '@/components/CustomButton';
import { useRegister } from '@/src/api/mutations/useRegister';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { mutate: registerMutation, isPending } = useRegister();

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
    registerMutation({ name, email, password });
  };

  return (
    <ScreenWrapper className="flex-1 justify-center">
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
      <View className="mb-8">
        <Text className="text-3xl font-bold text-text mb-2">Crear Cuenta</Text>
        <Text className="text-base text-muted">Únete a OpniBovino</Text>
      </View>

      <View className="space-y-4">
        <CustomInput
          label="Nombre completo"
          placeholder="Ej. Juan Pérez"
          autoCapitalize="words"
          value={name}
          onChangeText={setName}
          editable={!isPending}
        />

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

        <CustomInput
          label="Confirmar contraseña"
          placeholder="********"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          editable={!isPending}
        />
      </View>

      <View className="mt-8">
        <CustomButton 
          title={isPending ? "Registrando..." : "Registrarse"} 
          onPress={handleRegister} 
          className="w-full" 
          disabled={isPending}
        />
      </View>

      <View className="mt-8 items-left">
        <Text className="text-muted">
          ¿Ya tienes cuenta?{' '}
          <Text 
            className="text-primary font-bold" 
            onPress={() => !isPending && router.back()}
          >
            Inicia sesión
          </Text>
        </Text>
      </View>
    </ScreenWrapper>
  );
}