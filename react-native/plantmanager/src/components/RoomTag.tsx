import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface RoomTagProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export default function RoomTag({ title, active, ...rest }: RoomTagProps) {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    borderRadius: 12,
    height: 40,
    width: 76,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 13,
    lineHeight: 23,
  },
  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
});
