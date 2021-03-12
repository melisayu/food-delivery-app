import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function FavoriteScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.favoriteTitle}>Your favorites</Text>
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

export default FavoriteScreen;
