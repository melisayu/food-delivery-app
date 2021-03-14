import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

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
      <ScrollView horizontal>
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
  },
  homeTitle: {
    fontSize: 34,
    fontWeight: '700',
  }
})

export default HomeScreen;
