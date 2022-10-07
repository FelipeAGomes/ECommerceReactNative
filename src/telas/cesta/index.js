import React from 'react';
import { StyleSheet, View } from 'react-native';

import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';

export default function Cesta(){
    // <> </> fragmento, que serve para agrupar os componentes sem a necessidade de criar outra camada
    return <> 
        <Topo/>
        <View style={estilos.cesta}>
            <Detalhes/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});