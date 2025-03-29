import React from "react";
import { StyleSheet, Text, View } from 'react-native'

export default function PrimeiroComponente(){
   return (
    <View>
        <Text>Primeiro Componente</Text>
    </View>
   )
}

const styles = StyleSheet.create({
    textoGrande: {
        fontSize: 40
    }
})