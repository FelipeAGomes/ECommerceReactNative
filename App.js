import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'; // fontes importadas do googlefonts

import Cesta from './src/telas/cesta';
import mock from './src/mocks/CestaMock';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if(!fonteCarregada){
    // SplashScreen é a imagem que fica na tela enquanto o app esta carregando, nesse caso o apploading fica no lugar da view
    return <View/>
  }
  return (
    // SafeAreaView serve para app ios, para renderizar o conteudo dentro dos limites da area segura de um dispositivo (aplicavel apenas para ios)
    
    // StatusBar é a barra de status é a zona, normalmente na parte superior da tela, que exibe a hora atual, informações de rede Wi-Fi e celular, nível de bateria e/ou outros ícones de status.

    // {...mock} seria igual topo={mock.topo} detalhes={mock.detalhes}

    // style={{flex:1}para que a SafeAreaView, a View principal ocupe 100% da tela, não 200%, para que ela não continue invisível e para que a FlatList fique como componente principal da aplicação e ela renderize somente os itens que estão visíveis.

    <SafeAreaView style= {{flex: 1 }}>
      <StatusBar/>
      <View>        
        <Cesta {...mock}/>
      </View>

    </SafeAreaView>
  );
}

