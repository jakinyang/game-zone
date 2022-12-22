import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {title: "Project Zomboid", rating: 5, body: "Hipsum Lorem", key: '1'},
    {title: "Horizon Zero Dawn", rating: 5, body: "Hipsum Lorem", key: '2'},
    {title: "AC: Odyssey", rating: 5, body: "Hipsum Lorem", key: '3'},
  ])
  const pressHandler = () => {
    navigation.navigate('Review');
  }

  return (
    <View style={globalStyles.container}>
      <FlatList 
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Review', item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
};