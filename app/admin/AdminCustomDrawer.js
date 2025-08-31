import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import imagePath from "../constants/imagePath";
import AdminCustomDrawerStyle from "./AdminCustomDrawerStyle";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import navigationStrings from "../constants/navigationStrings";

const AdminCustomDrawer = (props) => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem("user"); // clear stored user data
      navigation.navigate(navigationStrings.SIGNINSCREEN);
    } catch (error) {
      console.log("Error clearing AsyncStorage:", error);
    }
  };
  return (
    <View style={AdminCustomDrawerStyle.container}>
      {/* Header */}
      <View style={AdminCustomDrawerStyle.headerContainer}>
        <View style={AdminCustomDrawerStyle.profileWrapper}>
          <View style={AdminCustomDrawerStyle.profileBorder}>
            <Image
              source={imagePath.user}
              style={AdminCustomDrawerStyle.profileImage}
            />
          </View>
        </View>
        <View style={AdminCustomDrawerStyle.userNameContainer}>
          <Text style={AdminCustomDrawerStyle.userNameText}>
            Subhasish Singha
          </Text>
        </View>
      </View>

      {/* Navigation */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={AdminCustomDrawerStyle.footer}>
        <View style={AdminCustomDrawerStyle.footerItem}>
          <Ionicons name="share-social-outline" size={22} color="#d2066c" />
          <Text style={AdminCustomDrawerStyle.footerItemText}>
            Tell a friend
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={AdminCustomDrawerStyle.footerItem}
            onPress={handleSignOut}>
            <Ionicons name="exit-outline" size={22} color="#d2066c" />
            <Text style={AdminCustomDrawerStyle.footerItemText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdminCustomDrawer;
