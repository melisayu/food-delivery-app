import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const AppButton = ({ title }) => (
  <TouchableOpacity style={styles.appButton}>
    <Text style={styles.appButtonText}>
      {title}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  appButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 25,
    width: '100%',
    position: 'absolute',
    bottom: 35,
  },
  appButtonText: {
    color: '#FF460A',
    fontSize: 17,
    alignSelf: 'center',
  }
});

export default AppButton;
