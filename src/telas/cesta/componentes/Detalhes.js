import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

import Texto from '../../../componentes/Texto';

// TouchableOpacity e o botao com opacidade quando onclick, o button normal tem uma grande limitacao de edicao.

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao}){
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.logoFazenda}/>
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>        
        <Texto style={estilos.descricao}>{descricao}</Texto>
        
    </>
}

const estilos = StyleSheet.create({
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda:{
      flexDirection: "row", // ReactNative tem o flexDirection colunm por padrao
      paddingVertical: 12,
    },
    logoFazenda:{
        width: 32,
        height: 32,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
})