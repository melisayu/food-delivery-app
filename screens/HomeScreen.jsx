import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
      {foods.length > 0 && foods.map((food) => (
        <Text key={food.is}>
          {food.name}
          {food.description}
        </Text>
      ))}
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
