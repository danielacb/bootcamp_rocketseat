import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";
import { format } from "date-fns";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantCardProps extends RectButtonProps {
  name: string;
  photo: string;
  hour: Date;
}

export default function PlantCardSecondary({
  name,
  photo,
  hour,
  ...rest
}: PlantCardProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={photo} width={50} height={50} />
      <Text style={styles.text}>{name}</Text>
      <View style={styles.details}>
        <Text style={styles.dateLabel}>Regas às</Text>
        <Text style={styles.date}>{format(new Date(hour), "HH:mm")}</Text>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.shape,
    marginVertical: 5,
  },
  text: {
    flex: 1,
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 17,
    marginLeft: 20,
  },
  details: {
    alignItems: "flex-end",
  },
  dateLabel: { fontSize: 13, fontFamily: fonts.text, color: colors.body_light },
  date: { fontSize: 13, fontFamily: fonts.heading, color: colors.heading },
});
