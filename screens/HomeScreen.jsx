import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

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
      <View style={styles.searchView}>
        <Icon name="magnifying-glass" style={styles.searchIcon} size={25} />
        <TextInput placeholder="Search" style={styles.textInput} /> 
      </View>
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
  searchView: {
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    marginBottom: 46,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    padding: 15,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 17,
    width: '100%',
    flex: 1,
    padding: 14,
  },
  homeTitle: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 28,
  },
  itemsContainer: {
    width: '110%',
  }
})

export default HomeScreen;
