import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';
import PrecoEBotao from './componentes/PrecoEBotao';

export default function Cesta({topo, detalhes, itens, precoEBotao}){
    
    // <> </> fragmento, que serve para agrupar os componentes sem a necessidade de criar outra camada
    // ScrollView para liberar o scrow na aplicacao
    // FlatList e a melhor forma de mapear uma lista no react native, ela tambem esta sendo o componente principal da aplicacao

    return <> 
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor= {({nome}) => nome }
            ListHeaderComponent={() => {
            return <>
                <Topo {...topo}/>
                <View style={estilos.cesta}>
                    <Detalhes {...detalhes}/>
                    <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                </View>
            </>    
            }}
            ListFooterComponent={() => {
                return<>
                    <PrecoEBotao {...precoEBotao} style={estilos.precoEBotao}/>
                </>    
            }}
       />        
    </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
});