import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ItemCard(props) {
  const { item } = props;

  return (
    <View style={styles.container}>
      {item && (
        <View key={item.id}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.sub}>{item.price}</Text>
        </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 220,
    height: 270,
    margin: 17,
    padding: 17,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: 'rgba(57, 57, 57, 0.1)',
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.1,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '600',
  },
  sub: {
    color: '#FA4A0C',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '700',
  }
});

export default ItemCard;
