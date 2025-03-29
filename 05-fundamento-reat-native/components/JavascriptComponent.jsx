import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavascriptComponent() {

  const nome= 'Ramerson'
  const idade= 27

  function checkidade(){
    if(idade >= 18){
        return "maior de idade"
    }else{
        return "menor de idade"
    }
  }

  function alerta(){
    alert('clicou no botão')
  }



  return (
    <View>
      <Text>JavascriptComponent</Text>
      <Button title='Clicar' onPress={alerta()}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})