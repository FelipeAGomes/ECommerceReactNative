import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'; // fontes importadas do googlefonts

import Cesta from './src/telas/Cesta'

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if(!fonteCarregada){
    return <View/>
  }
  return (
    // SafeAreaView serve para app ios, para renderizar o conteudo dentro dos limites da area segura de um dispositivo (aplicavel apenas para ios)
    // StatusBar é a barra de status é a zona, normalmente na parte superior da tela, que exibe a hora atual, informações de rede Wi-Fi e celular, nível de bateria e/ou outros ícones de status.

    <SafeAreaView>
      <StatusBar/>
      <View>
        <Cesta/>
      </View>

    </SafeAreaView>
  );
}

