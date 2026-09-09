import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { DrawerActions } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { APP_CONFIG } from '@/src/config/app.config';


export default function DashboardScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper className="pt-8">
      {/* Cabecera superior */}
      <View className="flex-row items-center mb-8">
        <TouchableOpacity 
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          className="bg-primary p-3 rounded-xl mr-4"
        >
          <Feather name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Image source={require('../../assets/logo.png')} className="w-10 h-10 rounded-lg bg-surface mr-3" resizeMode="contain" />
        <View>
          <Text className="text-text font-bold text-base">{APP_CONFIG.name}</Text>
          <Text className="text-secondary text-[10px] uppercase tracking-widest">{APP_CONFIG.slogan}</Text>
        </View>
      </View>

      {/* Saludo */}
      <View className="mb-8">
        <Text className="text-muted text-xs font-bold uppercase tracking-widest mb-1">Resumen</Text>
        <Text className="text-4xl font-extrabold text-text mb-2">Buenos días, Miguel Angel</Text>
        <Text className="text-base text-muted">Aquí tienes una mirada rápida a lo que pasa en tu hato.</Text>
      </View>

      {/* Cuadrícula de Métricas */}
      <View className="flex-row flex-wrap justify-between">
        
        <View className="bg-surface p-5 rounded-2xl w-[48%] mb-4 border border-muted/20">
          <Text className="text-muted text-sm mb-4">Animales registrados</Text>
          <Text className="text-text text-3xl font-extrabold mb-1">24</Text>
          <Text className="text-muted/50 text-xs">Actualizado hoy</Text>
        </View>
        
        <View className="bg-surface p-5 rounded-2xl w-[48%] mb-4 border border-muted/20">
          <Text className="text-muted text-sm mb-4">Cruzas analizadas</Text>
          <Text className="text-text text-3xl font-extrabold mb-1">18</Text>
          <Text className="text-muted/50 text-xs">Actualizado hoy</Text>
        </View>

        <View className="bg-surface p-5 rounded-2xl w-[48%] mb-4 border border-muted/20">
          <Text className="text-muted text-sm mb-4">Favoritos</Text>
          <Text className="text-text text-3xl font-extrabold mb-1">0</Text>
          <Text className="text-muted/50 text-xs">Actualizado hoy</Text>
        </View>

        <View className="bg-surface p-5 rounded-2xl w-[48%] mb-4 border border-muted/20">
          <Text className="text-muted text-sm mb-4">ROI promedio</Text>
          <Text className="text-text text-3xl font-extrabold mb-1">38.4%</Text>
          <Text className="text-muted/50 text-xs">Actualizado hoy</Text>
        </View>

      </View>
    </ScreenWrapper>
  );
}