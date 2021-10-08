import React, {useState, useEffect} from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";
import Screen from "../components/Screen";
import CharItem from "../components/CharItem";
import charactersApi from "../api/characters";



function EpisodeDetailsScreen({route, navigation}) {
  const episode = route.params;
  const chars = episode.characters;
  const [characters, setCharacters] = useState([]);
  
  const loadCharacters = async () => {
    const response = await charactersApi.getCharacters(chars);
    setCharacters(response);
  };

  useEffect(() => {
    loadCharacters();
  }, []);
  
  return (
    <Screen>
      <Image style={styles.image} source={require("../assets/episodebanner.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name} numberOfLines={2}>{episode.name}</Text>
        <View style={styles.secondContainer}>
            <Text style={styles.air_date} numberOfLines={1}>
              {episode.air_date}
            </Text>
            <Text style={styles.episode} numberOfLines={1}>
              {episode.episode}
            </Text>
          </View>
        <View style={styles.CharContainer}>
          <Text style={styles.char} numberOfLines={1}>
              Characters in this episode:
          </Text>
          <FlatList
            style={{marginTop: 10, marginBottom: 320}}
            data={characters}
            keyExtractor={( key ) => key.id.toString()}
            renderItem={({ item }) => (
              <CharItem
                image={{ uri: item.image}}
                name={item.name}
                species={item.species}
                onPress={() => navigation.navigate('CharacterDetails', item)}
              />
            )}
          />
          
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
    height: 160,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailsContainer: {
    display: 'flex',
    justifyContent: "space-between",
    padding: 20,
  },
  secondContainer: {
    marginTop: 20,
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
    paddingTop: 3,
    fontStyle: "italic",
  },
  name: {
    color: colors.primary,
    fontSize:22,
    fontWeight: "bold",
  },
  CharContainer: {
    borderTopColor: colors.secondary,
    marginVertical:20,
  },
  background: {
    flex: 1,
}
});

export default EpisodeDetailsScreen;
