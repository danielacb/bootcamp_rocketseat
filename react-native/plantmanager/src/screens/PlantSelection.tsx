import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { StackParamList } from "../routes/stack.routes";
import Header from "../components/Header";
import RoomTag from "../components/RoomTag";
import PlantCardPrimary from "../components/PlantCardPrimary";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import api from "../services/api";

type PlantSelectionProps = StackScreenProps<StackParamList, "Confirmation">;

type EnvironmentProps = {
  key: string;
  title: string;
};

type PlantProps = {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
};

export default function PlantSelection({ route }: PlantSelectionProps) {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState("all");
  const { userName } = route.params;

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get(
        "plants_environments?_sort=title&_order=asc"
      );
      setEnvironments([{ key: "all", title: "Todos" }, ...data]);
    }
    fetchEnvironment();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get("plants?_sort=name&_order=asc");
      setPlants(data);
    }
    fetchPlants();
  }, []);

  function handleEnvironmentSelection(key: string) {
    setSelectedEnvironment(key);

    if (key === "all") return setFilteredPlants(plants);

    const filtered = plants.filter((plant: PlantProps) =>
      plant.environments.includes(key)
    );

    setFilteredPlants(filtered);
  }

  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <Header name={userName} />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <RoomTag
              title={item.title}
              active={item.key === selectedEnvironment}
              onPress={() => handleEnvironmentSelection(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.roomsList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styles.plantsList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  padding: {
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 23,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 23,
  },
  roomsList: {
    marginLeft: 32,
    marginTop: 18,
    marginBottom: 10,
    paddingRight: 40,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 22,
  },
  plantsList: {},
});
