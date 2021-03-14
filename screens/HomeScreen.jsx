import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

import ItemCard from '../components/ItemCard';

function HomeScreen() {
  let [foods, setFoods] = useState([]);

  useEffect(() => {
    if (foods) {
      fetch('/api/foods')
        .then((res) => res.json())
        .then((json) => setFoods(json.foods))
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>Delicious foods for you</Text>
      <TextInput placeholder="Search" style={styles.textInput} />
      <ScrollView horizontal style={styles.itemsContainer}>
        {foods.length > 0 && foods.map((food) => (
          <ItemCard
            item={food}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  homeTitle: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 28,
  },
  textInput: {
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    fontSize: 17,
    width: '100%',
    height: 60,
    padding: 16,
    marginBottom: 46,
  },
  itemsContainer: {
    width: '110%',
  }
})

export default HomeScreen;
