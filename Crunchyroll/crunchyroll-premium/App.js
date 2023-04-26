import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function CheckIcon() {
  return (
    <View style={styles.checkIcon}>
      <Text style={styles.check}>✓</Text>
    </View>
  );
}

export default function Tela() {
  const data = [
    'Sem propagandas',
    'Acesso ilimitado ao acervo da Crunchyroll',
    'Novos episódios junto com o Japão',
    'Acesso a mangá digital (apenas inglês)',
    'Assiste em até 4 dispositivos',
    'Offline Viewing',
    '16% de desconto na mensalidade',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crunchyroll Premium</Text>
      <Text style={styles.subtitle}>Teste gratuito de 14 dias</Text>
      <Image source={require('./assets/hime_img.png')} style={styles.image} />
      <Text style={styles.title2}>MEGA FAN ANUAL</Text>
      <Text style={styles.price}>R$ 199,99 / ano</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <CheckIcon />
            <Text style={styles.listItemText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
      />
      <TouchableOpacity style={styles.button}>
        <AntDesign name="crown" size={20} color="#222" />
        <Text style={styles.buttonText}>ASSINAR COM TESTE GRATUITO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'orange',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 40,
  },
    title2: {
    fontSize: 26,
    fontWeight: '500',
    color: 'orange',
    marginTop: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkIcon: {
    backgroundColor: '#0F1212',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  check: {
    color: 'orange',
    fontSize: 20,
  },
  listItemText: {
    color: 'white',
    fontSize: 14,
  },
  button: {
    backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
  },
  buttonText: {
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
