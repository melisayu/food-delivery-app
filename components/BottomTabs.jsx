import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function BottomTabs({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const getIcon = routeName => {
    switch(routeName) {
      case 'Home':
        return (
          <Icon.Button
            name="home"
            backgroundColor="#fff"
            color="#FA4A0C"
            style={styles.icon}
          >
            <Text>{routeName}</Text>
          </Icon.Button>
        );
      case 'Favorite':
        return (
          <Icon.Button
            name="heart"
            backgroundColor="#fff"
            color="#FA4A0C"
            style={styles.icon}
          >
            <Text>{routeName}</Text>
          </Icon.Button>
        )
      case 'Profile':
        return (
          <Icon.Button
            name="user"
            backgroundColor="#fff"
            color="#FA4A0C"
            style={styles.icon}
          >
            <Text>{routeName}</Text>
          </Icon.Button>
        )
      case 'PastOrders':
        return (
          <Icon.Button
            name="back-in-time"
            backgroundColor="#fff"
            color="#FA4A0C"
            style={styles.icon}
          >
            <Text>{routeName}</Text>
          </Icon.Button>
        )
      default:
        return null;
    }
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) =>   {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
                      ? options.tabBarLabel
                      : options.title !== undefined
                      ? options.title
                      : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabContainer}
          >
            {getIcon(label)}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  icon: {
    flexDirection: 'column',
  }
})

export default BottomTabs;
