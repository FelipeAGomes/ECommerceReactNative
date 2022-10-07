import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function PrecoEBotao({preco, botao}){
    return <>
        <Texto style={estilos.total}>Total</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

        <TouchableOpacity style={estilos.botao} onPress={()=>{}}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
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
    total:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
})