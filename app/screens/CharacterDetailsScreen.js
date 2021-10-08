import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";
import Screen from "../components/Screen";



function EpisodeDetailsScreen({route, navigation}) {
  const character = route.params;
  
  return (
    <Screen>
      <Image style={styles.image} source={{ uri: character.image}} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name} numberOfLines={2}>{character.name}</Text>
        <View style={styles.secondContainer}>
          <Text style={styles.subTitle} numberOfLines={1}>
            Status: 
          </Text>
          <Text style={styles.episode} numberOfLines={1}>
            {character.status}
          </Text>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.subTitle} numberOfLines={1}>
            Species: 
          </Text>
          <Text style={styles.episode} numberOfLines={1}>
            {character.species}
          </Text>
        </View>
        { 
        (character.type != "") &&
        (<View style={styles.secondContainer}>
          <Text style={styles.subTitle} numberOfLines={1}>
            Type: 
          </Text>
          <Text style={styles.episode} numberOfLines={1}>
            {character.type}
          </Text>
        </View>)
        }
        <View style={styles.secondContainer}>
          <Text style={styles.subTitle} numberOfLines={1}>
            Gender: 
          </Text>
          <Text style={styles.episode} numberOfLines={1}>
          {character.gender}
          </Text>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.subTitle} numberOfLines={1}>
            Origin: 
          </Text>
          <Text style={styles.episode} numberOfLines={1}>
            {character.origin.name}
          </Text>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.subTitle} numberOfLines={1}>
            Location: 
          </Text>
          <Text style={styles.episode} numberOfLines={1}>
            {character.location.name}
          </Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  char: {
    color: colors.bgsecondary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: "50%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailsContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: "space-between",
    padding: 30,
  },
  secondContainer: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  episode: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 14,
  },
  air_date: {
    color: colors.secondary,
    fontSize: 14,
    paddingTop: 3,
    fontStyle: "italic",
  },
  name: {
    color: colors.primary,
    fontSize:22,
    fontWeight: "bold",
  },
  CharContainer: {
    marginVertical: 40,
  },
  background: {
    flex: 1,
  },
  subTitle: {
    color: colors.subTitle,
  }
});

export default EpisodeDetailsScreen;
