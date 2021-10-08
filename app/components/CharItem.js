import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function ListItem({
  name,
  species,
  image,
  onPress,
}) {
  return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name} numberOfLines={2}>
              {name}
            </Text>
            <Text style={styles.species} numberOfLines={2}>
              {species}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  species: {
    fontSize: 15,
    color: colors.secondary,
  },
  name: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "500",
  },
});

export default ListItem;
