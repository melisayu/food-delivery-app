import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PastOrdersScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Past Orders</Text>
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

export default PastOrdersScreen;
