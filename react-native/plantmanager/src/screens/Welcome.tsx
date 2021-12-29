import React from "react";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";

import colors from "../styles/colors.ts";
import Watering from "../assets/watering.png";
import Button from "../components/Button";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Manage your plants!</Text>

      <Image source={Watering} />

      <Text style={styles.subtitle}>
        Never Forget to Water Your Plants Again!
      </Text>

      <Button title="Let's go!" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
});
