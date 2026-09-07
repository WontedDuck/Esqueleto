import { View, Text } from 'react-native';
import { ScreenWrapper } from '@/components/ScreenWrapper';

export default function DashboardScreen() {
  return (
    <ScreenWrapper className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold text-text">Panel Principal</Text>
      <Text className="text-base text-muted mt-2">Estás autenticado en OpniBovino.</Text>
    </ScreenWrapper>
  );
}