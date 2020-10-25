import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
 const WEATHER_API_KEY = '4f23ed6755890fb8386c128be29a9e48'
 const BASE_WEATHER_URL = 'api.openweathermap.org/data/2.5/weather?'


export default function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  useEffect(() => {
    load()
  }, [])

  async function load() {
    try {
      let { status } = await Location.requestPermissionAsync()

      if(status != 'granted'){
        setErrorMessage('Access to location is needed to run the app')
        return
      }
      const location = await Location.getCurrentPositionAsync()

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longtitude}&appid=${WEATHER_API_KEY}`


      const { latitude, longtitude } = location.coords
      
    }  catch (error) {}
  }
  return (
    <View style={styles.container}>
      <Text>Lance's Weather App</Text>
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
