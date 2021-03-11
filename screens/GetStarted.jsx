import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';

function GetStarted({ navigation }) {
  console.log('navi', navigation)
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.mainText}>Food for Everyone</Text>
      <Image source={require('../assets/face1.png')} style={styles.face1} resizeMode="contain" />
      <Image source={require('../assets/face2.png')} style={styles.face2} resizeMode="contain" />
      <AppButton title="Get started" press={() => navigation.push('HomeScreen')}></AppButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF460A',
    alignItems: 'center',
    paddingVertical: 35,
    paddingHorizontal: 50,
    position: 'relative',
    flexDirection: 'column',
  },
  logoContainer: {
    alignSelf: 'flex-start',
    top: 20,
    width: 73,
    height: 73,
    borderRadius: 100 / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    left: 3,
  },
  mainText: {
    fontSize: 65,
    color: '#fff',
    fontWeight: '800',
    marginTop: 30,
  },
  face1: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    zIndex: -1,
    width: '100%',
  },
  face2: {
    position: 'absolute',
    right: 0,
    bottom: 100,
    zIndex: -2,
    width: '75%',
  },
});

export default GetStarted;
