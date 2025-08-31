import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RoutesDashboardAdminStyle from "./RoutesDashboardAdminStyle";
import imagePath from "../constants/imagePath";

export const getAdminHeaderOptions = () => ({
  headerStyle: RoutesDashboardAdminStyle.headerStyle,
  headerTitle: () => (
    <View style={RoutesDashboardAdminStyle.headerTitleContainer}>
      <Image
        source={imagePath.mySchoolLogo}
        style={RoutesDashboardAdminStyle.headersLeftImage}
      />
      <Text style={RoutesDashboardAdminStyle.headerTitleText}>ADMIN</Text>
      <Image
        source={imagePath.adminLogo}
        style={RoutesDashboardAdminStyle.headerImage}
      />
      <Image
        source={imagePath.InnoviunLogo}
        style={RoutesDashboardAdminStyle.headersImage}
      />
    </View>
  ),
  headerTintColor: "#fff",
  headerLeftContainerStyle: RoutesDashboardAdminStyle.headerLeftContainer,
  headerRight: () => (
    <TouchableOpacity
      style={RoutesDashboardAdminStyle.headerRightButton}
      onPress={() => console.log("Search Icon Pressed")}
    >
      <Ionicons name="search" size={24} color="#fff" />
    </TouchableOpacity>
  ),
  headerRightContainerStyle: RoutesDashboardAdminStyle.headerRightContainer,
});
