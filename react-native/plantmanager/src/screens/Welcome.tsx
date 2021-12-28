import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import colors from "../styles/colors.ts";
import Watering from "../assets/watering.png";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Manage your plant!</Text>

      <Image source={Watering} />

      <Text style={styles.subtitle}>
        Never Forget to Water Your Plants Again!
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Let's go!</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginBottom: 24,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});
