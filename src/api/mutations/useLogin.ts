import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../../store/authStore';
import { Alert } from 'react-native';
//import { api } from '@/src/lib/api';

export const useLogin = () => {
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      // SIMULACION
      console.log('Simulando petición al backend con:', credentials);
      return new Promise<{ token: string }>((resolve, reject) => {
        setTimeout(() => {
          if (credentials.email === 'admin@optibovino.com' && credentials.password === '123456') {
            resolve({ token: 'fake_jwt_token_12345' });
          } else {
            reject(new Error('Credenciales incorrectas'));
          }
        }, 1500);
      });

      // CODIGO REAL
      // const { data } = await api.post('/auth/login', credentials);
      // return data;
    },
    onSuccess: async (data) => {
      if (data.token) {
        await login(data.token);
      }
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || error.message || 'Error al iniciar sesión';
      Alert.alert('Error de Autenticación', errorMessage);
    }
  });
};