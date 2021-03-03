import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import AppButton from './components/AppButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.mainText}>Food for Everyone</Text>
      <AppButton title="Get started"></AppButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF460A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 35,
    paddingHorizontal: 50,
    position: 'relative',
  },
  logoContainer: {
    position: 'absolute',
    top: 56,
    left:50,
    width: 73,
    height: 73,
    borderRadius: 100 / 2,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    left: 3,
  },
  mainText: {
    fontSize: 65,
    color: '#fff',
  },
});
