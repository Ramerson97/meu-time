import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Perfil = (props) => {
  return (
    <View>
      <Text>Perfil</Text>
      <Text>Nome: {props.nome}</Text>
      <Text>Idade: {props.idade}</Text>
      <Text>Email: {props.email}</Text>
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({})