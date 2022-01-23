import React, { useEffect, useState } from "react";
import { Alert, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";

import Header from "../components/Header";
import WaterDrop from "../assets/waterdrop.png";
import PlantProps from "../types/plant";
import { loadPlant, removePlant } from "../libs/storage";
import Loading from "../components/Loading";
import PlantCardSecondary from "../components/PlantCardSecondary";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function MyPlants() {
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState("");

  useEffect(() => {
    async function loadStorageData() {
      const plantStorage = await loadPlant();
      const nextTime = formatDistance(
        new Date(plantStorage[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatered(
        `Não esqueça de regar a ${plantStorage[0].name} às ${nextTime} horas`
      );

      setPlants(plantStorage);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  function handleRemove(plant: PlantProps) {
    Alert.alert("Remover", `Deseja remover a ${plant.name}?`, [
      {
        text: "Não 🙏🏼",
        style: "cancel",
      },
      {
        text: "Sim 😢",
        onPress: async () => {
          try {
            await removePlant(plant.id);

            setPlants((prevState) =>
              prevState.filter((item) => item.id !== plant.id)
            );
          } catch (error) {
            Alert.alert("Não foi possível remover! 😢");
          }
        },
      },
    ]);
  }

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={WaterDrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextWatered}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.title}>Próximas regadas</Text>
        <FlatList
          data={plants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => handleRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 32,
    backgroundColor: colors.background,
  },
  spotlight: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 20,
    backgroundColor: colors.blue_light,
    padding: 16,
  },
  spotlightImage: {
    width: 56,
    height: 56,
    marginRight: 24,
  },
  spotlightText: {
    color: colors.blue,
    fontSize: 15,
    lineHeight: 23,
    maxWidth: 164,
  },
  plants: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 32,
    marginBottom: 16,
  },
});
