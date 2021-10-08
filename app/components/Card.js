import React from "react";
import { View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ name, air_date, episode, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name} numberOfLines={2}>
            {name}
          </Text>
          <View style={styles.secondContainer}>
            <Text style={styles.air_date} numberOfLines={1}>
              {air_date}
            </Text>
            <Text style={styles.episode} numberOfLines={1}>
              {episode}
            </Text>
          </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
  },
  card: {
    borderRadius: 15,
    backgroundColor: "#252525",
    marginBottom: 20,
    overflow: "hidden",
    margin:5
  },
  detailsContainer: {
    display: 'flex',
    padding: 20,
  },
  secondContainer: {
    marginTop: 10,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  episode: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  air_date: {
    color: colors.secondary,
    fontSize: 14,
    paddingTop: 5,
    fontStyle: "italic",
  },
  name: {
    color: colors.primary,
    fontWeight: "600",
  },
});

export default Card;
