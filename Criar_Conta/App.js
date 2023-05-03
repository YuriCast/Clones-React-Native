import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// Importando a imagem do logo da Crunchyroll
import crunchyrollLogo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={crunchyrollLogo} style={styles.logo}
       />

        <TextInput
        style={styles.input}
        placeholder="Insira seu E-mail"
      />

        <TextInput
        style={styles.input}
        placeholder="Insira sua Senha"
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirme sua Senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.cadastrar}>
        <Text style={[styles.buttonText, { color: '#FFF', fontWeight: 'bold'}]}>CRIAR CONTA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    padding: 16,
  },
  logo: {
    width: 240,
    height: 30,
    marginBottom: 120,
    marginTop: 120,
  },
  cadastrar: {
    backgroundColor: '#FF6400',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 8,
  },
});
