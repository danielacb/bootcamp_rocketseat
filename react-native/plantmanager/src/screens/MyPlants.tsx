import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";
import WaterDrop from "../assets/waterdrop.png";
import PlantProps from "../types/plant";
import { loadPlant } from "../libs/storage";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import PlantCardSecondary from "../components/PlantCardSecondary";

export default function MyPlants() {
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [loading, setloading] = useState(true);
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
        `Não esqueça de regar a ${plantStorage[0].name} à ${nextTime} horas`
      );

      setPlants(plantStorage);
    }

    loadStorageData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={WaterDrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>
          Regue sua Aningapara daqui 2 horas
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.title}>Próximas regadas</Text>
        <FlatList
          data={plants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PlantCardSecondary
              name={item.name}
              photo={item.photo}
              hour={item.dateTimeNotification}
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
