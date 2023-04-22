import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/google.png')} style={styles.logo} />
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <View style={{ width: 24 }} />
          <Text style={styles.searchText} placeholder="Search of type URL">Search of type URL</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Ionicons name="md-more" size={24} color="#bbb" style={styles.icon} />
          <Ionicons name="md-camera" size={24} color="#bbb" style={styles.icon} />
        </View>
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
    width: 310,
    height: 100,
    marginTop: 50,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchText: {
    fontSize: 16,
    color: '#bbb',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 50,
  },
  icon: {
    marginLeft: 10,
  },
});
