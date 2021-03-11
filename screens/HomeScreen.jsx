import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';

function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>Delicious foods for you</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen;
