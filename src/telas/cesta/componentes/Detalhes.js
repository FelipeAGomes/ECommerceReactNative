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
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 46,
        marginTop: 8,
    },
    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,

    },
    textoBotao:{
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})