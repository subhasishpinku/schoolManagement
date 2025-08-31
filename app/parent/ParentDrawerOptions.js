import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../styles/colors";
import imagePath from "../constants/imagePath";

export default function ParentDrawerOptions(title) {
  return {
    headerStyle: {
      backgroundColor: colors.title, // Top bar background color
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
          source={imagePath.studentLogo}
          style={{ width: 30, height: 30, marginLeft: 10 }}
        />

        <Image
          source={imagePath.InnoviunLogo}
          style={{ width: 40, height: 40, marginLeft: 40, borderRadius: 10 }}
        />
      </View>
    ),
    headerTintColor: "#fff", // Back arrow color
    headerLeftContainerStyle: {
      marginLeft: 10, // Adjust back arrow alignment
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
      marginRight: 15, // Adjust right margin for proper alignment
    },
  };
}
