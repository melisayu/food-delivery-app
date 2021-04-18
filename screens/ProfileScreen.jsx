import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
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

export default ProfileScreen;
