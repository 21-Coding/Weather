import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';


export default function App() {
  useEffect(() => {
    load()
  }, [])

  async function load() {
    try {
      let { status } = await Location.requestPermissionAsync()

      if(status != 'granted'){
        setErrorMessage('Acces to location to run the app')
        return
      }
      const location = await Location.getCurrentPositionAsync()

      const {latitude, longitude} = location.coords
      alert(`Latitiude : $(latitude), Longtitude: $(longtitude)`)
    }  catch (error) {

    }
  }
  return (
    <View style={styles.container}>
      <Text>Lance's Weather</Text>
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
});
