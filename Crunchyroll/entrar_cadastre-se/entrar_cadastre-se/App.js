import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// Importando a imagem do logo da Crunchyroll
import crunchyrollLogo from './assets/logo.png';
import crunchyrollMascote from './assets/hime1.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={crunchyrollLogo} style={styles.logo} />
      <Image source={crunchyrollMascote} style={styles.mascote} />
      <TouchableOpacity style={styles.entrar}>
        <Text style={[styles.buttonText, { color: '#FF6400' }]}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cadastro}>
        <Text style={[styles.buttonText, { color: '#FFF' }]}>CADASTRE-SE</Text>
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
  width: 200,
  height: 30,
  marginBottom: 20,
  marginTop: 50,
  },
  mascote: {
    width: 200,
    height: 290,
    marginBottom: 80,
    marginTop: 50,
  },
  entrar: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  cadastro: {
    backgroundColor: '#FF6400',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
