import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function Confirmation() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function getUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setUserName(user || "");
    }

    getUserName();
  }, []);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.emoji}>😄</Text>
        <Text style={styles.title}>{userName}, that's it!</Text>
        <Text style={styles.subtitle}>
          Now let's take good care of your plants!
        </Text>
      </View>
      <View style={styles.footer}>
        <Button
          title="Let's go"
          onPress={() => navigation.navigate("PlantSelection" as never)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    textAlign: "center",
    fontSize: 64,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 20,
    color: colors.heading,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
});
