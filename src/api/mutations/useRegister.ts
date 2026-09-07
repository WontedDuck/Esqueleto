import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/src/store/authStore';
import { Alert } from 'react-native';
// import { api } from '@/src/api/api';

export const useRegister = () => {
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: async (userData: { name: string; email: string; password: string }) => {
      // SIMULACION
      console.log('Enviando paquete de registro:', userData);
      return new Promise<{ token: string }>((resolve) => {
        setTimeout(() => {
          resolve({ token: 'fake_jwt_token_new_user' });
        }, 1500);
      });

      // CODIGO REAL
      // const { data } = await api.post('/auth/register', userData);
      // return data;
    },
    onSuccess: async (data) => {
      if (data.token) {
        await login(data.token);
      }
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || 'Error al crear la cuenta';
      Alert.alert('Fallo en el registro', errorMessage);
    }
  });
};