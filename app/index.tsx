import { useRef, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { CustomButton } from '@/components/CustomButton';
import { APP_CONFIG } from '@/src/config/app.config';

export default function LandingScreen() {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const [methodologyY, setMethodologyY] = useState(0);
  const scrollToMethodology = () => {
    scrollViewRef.current?.scrollTo({ y: methodologyY, animated: true });
  };

  return (
    <ScrollView ref={scrollViewRef} className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <View className="flex-row items-center justify-between px-4 py-4 pt-12">
        <View className="flex-row items-center">
          <Image 
            source={require('../assets/logo.png')} 
            className="w-10 h-10 mr-2 rounded-lg bg-surface" 
            resizeMode="contain" 
          />
          <View>
            <Text className="text-textbutton font-bold text-base">{APP_CONFIG.name}</Text>
            <Text className="text-secondary text-[10px] uppercase tracking-widest">{APP_CONFIG.slogan}</Text>
          </View>
        </View>

        <View className="flex-row items-center space-x-4">
          <TouchableOpacity onPress={() => router.push('/(auth)/login' as any)}>
            <Text className="text-text font-bold">Iniciar sesión </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => router.push('/(auth)/register' as any)}
            className="bg-primary px-5 py-2 rounded-xl"
          >
            <Text className="text-textbutton font-bold text-sm">Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>



      <View className="px-6 pt-8 pb-12">
        <View className="bg-[#E4E6DF] dark:bg-surface self-start px-3 py-1 rounded-full mb-6">
          <Text className="text-text text-xs font-semibold">✦ Inteligencia para tu hato</Text>
        </View>
        <Text className="text-text text-5xl font-extrabold tracking-tight leading-tight mb-4">
          La mejor cruza empieza con una mejor decisión.
        </Text>
        <Text className="text-muted text-base leading-relaxed mb-8">
          Registra todos los datos de tus animales, compara escenarios y deja que Opti Bovino encuentre oportunidades de producción y rentabilidad.
        </Text>
        <View className="space-y-4">
          <CustomButton 
            title="Comenzar ahora →" 
            onPress={() => router.push('/(auth)/register' as any)}
            className="w-full"
          />
          <TouchableOpacity 
            onPress={scrollToMethodology}
            className="w-full py-4 border border-secondary rounded-xl items-center justify-center"
          >
            <Text className="text-text font-bold text-base">Conoce el método</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between mt-6">
          <Text className="text-muted text-xs">✓ Cruzas ilimitadas</Text>
          <Text className="text-muted text-xs">✓ Excel / CSV </Text>
          <Text className="text-muted text-xs">✓ Favoritos y PDF</Text>
        </View>
      </View>

      <View className="px-6 py-12">
        <View className="bg-primary rounded-3xl p-8 items-center mb-12">
          <View className="bg-surface p-4 rounded-2xl mb-4">
            <Image 
              source={require('../assets/logo.png')} 
              className="w-20 h-20" 
              resizeMode="contain" 
            />
          </View>
          <Text className="text-textbutton font-bold text-xl mb-1">Ciencia para tu hato </Text>
          <Text className="text-textbutton text-sm">Datos claros para decidir mejor. </Text>
        </View>
      </View>


      <View className="px-6 py-12" onLayout={(event) => setMethodologyY(event.nativeEvent.layout.y)}>
        <Text className="text-secondary text-xs font-bold tracking-widest mb-2 uppercase">
          Predicciones heurísticas
        </Text>
        <Text className="text-text text-4xl font-bold mb-4">
          Decisiones claras, sin cajas negras.
        </Text>
        <Text></Text>
        <Text className="text-muted text-base leading-relaxed mb-8">
          Opti Bovino normaliza los datos, calcula un Índice Productivo Simulado y prueba todas las combinaciones para recomendar las cruzas más convenientes.
        </Text>


        <View className="flex-row flex-wrap justify-between">
          {[
            { id: '01', title: 'Normalizar', desc: 'Escala común de 0 a 1.' },
            { id: '02', title: 'Ponderar', desc: 'Peso 40%, GDP 40%, resistencia 20%.' },
            { id: '03', title: 'Cruzar', desc: 'Todos contra todos con controles.' },
            { id: '04', title: 'Estimar', desc: 'Productividad esperada de la cría.' },
            { id: '05', title: 'Priorizar', desc: 'ROI y conveniencia en orden.' },
          ].map((step) => (
            <View key={step.id} className="bg-surface w-[48%] p-4 rounded-2xl mb-4 shadow-sm border border-[#E4E6DF] dark:border-secondary">
              <Text className="text-secondary text-xs font-bold mb-2">{step.id}</Text>
              <Text className="text-text font-bold mb-1">{step.title}</Text>
              <Text className="text-muted text-xs">{step.desc}</Text>
            </View>
          ))}
        </View>
      </View>



      <View className="bg-primary px-6 py-12">
        <View className="mb-8">
          <Text className="text-textbutton font-bold text-lg mb-1">Tu hato completo</Text>
          <Text className="text-textbutton text-sm">Captura genética, productiva, sanitaria y económica.</Text>
        </View>

        <View className="mb-8">
          <Text className="text-textbutton font-bold text-lg mb-1">IA comparativa</Text>
          <Text className="text-textbutton text-sm">Explora todas las cruzas posibles, no solo una.</Text>
        </View>

        <View className="mb-4">
          <Text className="text-textbutton font-bold text-lg mb-1">Decisiones documentadas</Text>
          <Text className="text-textbutton text-sm">Guarda favoritos y descarga el cálculo explicado.</Text>
        </View>
      </View>
      
    </ScrollView>
  );
}