import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, CheckBox } from 'react-native';
import Constants from 'expo-constants';

// Importando a imagem do logo da Crunchyroll
import crunchyrollLogo from './assets/logo.png';

export default function App() {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <View style={styles.container}>
      <Image source={crunchyrollLogo} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Quero ser informado de das novidades e ofertas da Crunchyroll.</Text>
      </View>
      <TouchableOpacity style={styles.entrar}>
        <Text style={[styles.buttonText, { color: '#E9E9E9' }]}>ENTRAR</Text>
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
    marginBottom: 120,
    marginTop: 50,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    color: '#000',
  },
  entrar: {
    backgroundColor: '#FF6400',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 12,
  },
});
