import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Serie = ({ nome, ano, diretor, temporadas, capa }) => {
  return (
    <View style={styles.serie}>
      <Image source={{ uri: capa }} style={styles.capa} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.texto}><Text style={styles.bold}>Ano de lançamento:</Text> {ano}</Text>
      <Text style={styles.texto}><Text style={styles.bold}>Diretor:</Text> {diretor}</Text>
      <Text style={styles.texto}><Text style={styles.bold}>Número de temporadas:</Text> {temporadas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  serie: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  capa: {
    width: 200,
    height: 300,
    borderRadius: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  texto: {
    fontSize: 16,
    color: '#555',
    marginVertical: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Serie;
