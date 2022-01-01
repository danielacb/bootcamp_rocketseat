import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import colors from "../styles/colors.ts";
import fonts from "../styles/fonts";
import Watering from "../assets/watering.png";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Manage your plants!</Text>

      <Image source={Watering} style={styles.image} resizeMode="contain" />

      <Text style={styles.subtitle}>Never forget to water them!</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("UserIdentification" as never)}
      >
        <Entypo name="chevron-right" style={styles.buttonIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 24,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    fontSize: 22,
    color: colors.white,
  },
});
