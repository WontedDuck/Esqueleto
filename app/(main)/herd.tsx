import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { DrawerActions } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { CustomButton } from '@/components/CustomButton';
import { APP_CONFIG } from '@/src/config/app.config';


// Mock temporal de datos del hato
const MOCK_ANIMALS = [
  { id: '1', tag: 'BOV-001', breed: 'Holstein', age: '3 años', status: 'Activo' },
  { id: '2', tag: 'BOV-002', breed: 'Cebú', age: '2.5 años', status: 'Gestación' },
  { id: '3', tag: 'BOV-003', breed: 'Suizo', age: '4 años', status: 'Activo' },
];

export default function HerdScreen() {
    const navigation = useNavigation();
    return (
    <ScreenWrapper className="pt-8">
      <View className="flex-row items-center mb-8">
        <TouchableOpacity 
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          className="bg-primary p-3 rounded-xl mr-4"
        >
          <Feather name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Image source={require('../../assets/logo.png')} className="w-10 h-10 rounded-lg bg-surface mr-3" resizeMode="contain" />
        <View>
            <Text className="text-textbutton font-bold text-base">{APP_CONFIG.name}</Text>
            <Text className="text-secondary text-[10px] uppercase tracking-widest">{APP_CONFIG.slogan}</Text>
        </View>
      </View>
      <View className="flex-row justify-between items-center mb-6">
        <View>
            <Text className="text-3xl font-bold text-text">Mis animales</Text>
            <Text className="text-muted text-sm">Gestión y registro del hato</Text>
        </View>
        <CustomButton 
          title="+ Agregar" 
          onPress={() => console.log('Abrir formulario de registro')} 
          className="py-3 px-4 rounded-xl"
          textClassName="text-sm"
        />
      </View>

      <FlatList
        data={MOCK_ANIMALS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
            <View className="bg-surface p-5 rounded-2xl mb-4 border border-muted/20">
                <View className="flex-row justify-between items-center">
                    <View>
                        <Text className="text-text font-extrabold text-lg">{item.tag}</Text>
                        <Text className="text-muted text-sm">Raza: {item.breed} • Edad: {item.age}</Text>
                    </View>
                    <View className="bg-secondary/20 px-3 py-1 rounded-full">
                        <Text className="text-primary text-xs font-bold">{item.status}</Text>
                    </View>
                </View>
            </View>
        )}
      />
    </ScreenWrapper>
  );
}