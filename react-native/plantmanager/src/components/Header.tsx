import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ProfileImage from "../assets/profile.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function getUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setUserName(user || "");
    }

    getUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hi,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image source={ProfileImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 36,
  },
  image: {
    borderRadius: 40,
    width: 56,
    height: 56,
  },
});
