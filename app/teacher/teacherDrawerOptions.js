import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../styles/colors";
import imagePath from "../constants/imagePath";

export default function teacherDrawerOptions(title) {
  return {
    headerStyle: {
      backgroundColor: colors.title,
    },
    headerTitle: () => (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={imagePath.mySchoolLogo}
          style={{ width: 40, height: 40, marginLeft: 0, borderRadius: 10 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 18,
            marginLeft: 60,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <Image
          source={imagePath.teacherLogo}
          style={{ width: 40, height: 40, marginLeft: 10 }}
        />

        <Image
          source={imagePath.InnoviunLogo}
          style={{ width: 40, height: 40, marginLeft: 40, borderRadius: 10 }}
        />
      </View>
    ),
    headerTintColor: "#fff",
    headerLeftContainerStyle: {
      marginLeft: 10,
    },
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() => {
          console.log("Search Icon Pressed");
        }}
      >
        <Ionicons name="search" size={24} color="#fff" />
      </TouchableOpacity>
    ),
    headerRightContainerStyle: {
      marginRight: 15,
    },
  };
}
