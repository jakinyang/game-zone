import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import Navigator from './routes/homeStack'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
      Font.loadAsync({
        'firacode-regular': require('./assets/fonts/FiraCode-Regular.ttf'),
        'firacode-bold': require('./assets/fonts/FiraCode-Bold.ttf'),
      })
      .then(() => {
        setFontsLoaded(true);
      })
      .catch(err => console.error(`Fonts failed to load: `, err));
  }, [])
  if (fontsLoaded) {
    return (
      <Navigator />
    )
  } else {
    return (
      <AppLoading 
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
