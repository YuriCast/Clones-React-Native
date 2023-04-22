import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/duolingo.png')}
        style={styles.logo}
      />
      <Text style={styles.subtitle}>Learn a language for free.</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOutline}>
          <Text style={[styles.buttonText, { color: '#6fa10d' }]}>
            I ALREADY HAVE AN ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 190,
    height: 190,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 18,
    color: '#A6A6A6',
    marginTop: 20,
    marginBottom: 30,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#6fa10d',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonOutline: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#A6A6A6',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
});