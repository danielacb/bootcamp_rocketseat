import React, { useState } from "react";
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgFromUri } from "react-native-svg";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { useRoute } from "@react-navigation/core";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { format, isBefore } from "date-fns";

import PlantProps from "../types/plant";
import Button from "../components/Button";

import WaterDrop from "../assets/waterdrop.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { loadPlant, savePlant } from "../libs/storage";

interface Params {
  plant: PlantProps;
}

export default function SelectedPlant() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");
  const route = useRoute();

  const { plant } = route.params as Params;

  function handleTimeChange(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === "android") setShowDatePicker(!showDatePicker);

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma hora no futuro!");
    }

    if (dateTime) setSelectedDateTime(dateTime);
  }

  async function handleSubmit() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });
    } catch (error) {
      Alert.alert("Could not save the plant! Please try again!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri={plant.photo} height={150} width={150} />
        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantText}>{plant.about}</Text>
      </View>
      <View style={styles.controllers}>
        <View style={styles.tipContainer}>
          <Image style={styles.tipImage} source={WaterDrop} />
          <Text style={styles.tipText}>{plant.water_tips}</Text>
        </View>
        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime || new Date()}
            mode="time"
            display="spinner"
            onChange={handleTimeChange}
          />
        )}

        {Platform.OS === "android" && (
          <TouchableOpacity
            style={styles.dateTimePickerButton}
            onPress={() => setShowDatePicker(!showDatePicker)}
          >
            <Text style={styles.dateTimePickerText}>
              {selectedDateTime
                ? format(selectedDateTime, "HH:mm")
                : "Selecionar Horário"}
            </Text>
          </TouchableOpacity>
        )}

        <Button title="Cadastrar planta" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.shape,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginBottom: 16,
  },
  plantText: {
    fontSize: 17,
    lineHeight: 25,
    color: colors.body,
    fontFamily: fonts.text,
    textAlign: "center",
  },
  controllers: {
    backgroundColor: colors.white,
    paddingHorizontal: 32,
    paddingBottom: getBottomSpace() || 20,
  },
  tipContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.blue_light,
    borderRadius: 20,
    padding: 16,
    marginTop: -44,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: fonts.text,
    width: 164,
    marginLeft: 24,
  },
  alertLabel: {
    textAlign: "center",
    fontFamily: fonts.text,
    fontSize: 13,
    lineHeight: 23,
    marginTop: 40,
    color: colors.body,
  },
  dateTimePickerButton: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 40,
  },
  dateTimePickerText: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.text,
  },
});
