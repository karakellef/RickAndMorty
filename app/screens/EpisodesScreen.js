import React, { useEffect } from "react";
import { FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import episodesApi from "../api/episodes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

function EpisodesScreen({ navigation }) {
  const getEpisodesApi = useApi(episodesApi.getEpisodes);

  useEffect(() => {
    getEpisodesApi.request();
  }, []);
  
  return (
    <>
      <ActivityIndicator visible={getEpisodesApi.loading} color={'#0000ff'}/>
    <Screen style={{marginTop: 20}}>
      <FlatList
        data={getEpisodesApi.data.results}
        keyExtractor={( episode ) => episode.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={require("../assets/episodebanner.jpg")}
            name={item.name}
            air_date={item.air_date}
            episode={item.episode}
            onPress={() => navigation.navigate('EpisodeDetails', item)}
          />
        )}
      />
      </Screen>
    </>

  );
}

export default EpisodesScreen;
