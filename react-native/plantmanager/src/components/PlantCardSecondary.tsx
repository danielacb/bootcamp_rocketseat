import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SvgFromUri } from "react-native-svg";
import { format } from "date-fns";
import { Feather } from "@expo/vector-icons";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export default function PlantCardSecondary({
  data,
  handleRemove,
  ...rest
}: PlantCardProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.removeButton} onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.container} {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />
        <Text style={styles.text}>{data.name}</Text>
        <View style={styles.details}>
          <Text style={styles.dateLabel}>Regas às</Text>
          <Text style={styles.date}>{data.hour}</Text>
        </View>
      </RectButton>
    </Swipeable>
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
  removeButton: {
    width: 100,
    height: 80,
    backgroundColor: colors.red,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    right: 10,
    paddingRight: 15,
  },
});
