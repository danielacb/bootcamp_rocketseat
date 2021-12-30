import React from "react";
import { View, Platform, StatusBar, StyleSheet } from "react-native";
import UserIdentification from "./src/screens/UserIdentification";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  return fontsLoaded ? (
    <View style={styles.container}>
      <UserIdentification />
    </View>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
