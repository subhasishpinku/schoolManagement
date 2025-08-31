import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import imagePath from "../constants/imagePath";
import { Ionicons } from "@expo/vector-icons";
import ParentCustomDrawerStyle from "./ParentCustomDrawerStyle";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import navigationStrings from "../constants/navigationStrings";

const ParentCustomDrawer = (props) => {
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
    <View style={ParentCustomDrawerStyle.container}>
      {/* Header */}
      <View style={ParentCustomDrawerStyle.header}>
        <View style={ParentCustomDrawerStyle.headerCenter}>
          <View style={ParentCustomDrawerStyle.profileBorder}>
            <Image
              source={imagePath.user}
              style={ParentCustomDrawerStyle.profileImage}
            />
          </View>
        </View>
        <View style={ParentCustomDrawerStyle.nameContainer}>
          <Text style={ParentCustomDrawerStyle.nameText}>User Name</Text>
        </View>
      </View>

      {/* Navigation */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={ParentCustomDrawerStyle.footer}>
        <View style={ParentCustomDrawerStyle.footerItem}>
          <Ionicons name="share-social-outline" size={22} color="#d2066c" />
          <Text style={ParentCustomDrawerStyle.footerItemText}>Tell a friend</Text>
        </View>

       

         <TouchableOpacity
            style={ParentCustomDrawerStyle.footerItem}
            onPress={handleSignOut}>
            <Ionicons name="exit-outline" size={22} color="#d2066c" />
          <Text style={ParentCustomDrawerStyle.footerItemText}>Sign Out</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default ParentCustomDrawer;
