import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';

import Cesta from './src/telas/Cesta'

export default function App() {
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

