import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import imagePath from "../constants/imagePath";
import { Ionicons } from "@expo/vector-icons";
import StudentCustomDrawerStyle from "./StudentCustomDrawerStyle";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import navigationStrings from "../constants/navigationStrings";

const StudentCustomDrawer = (props) => {
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
    <View style={StudentCustomDrawerStyle.container}>
      {/* Header */}
      <View style={StudentCustomDrawerStyle.header}>
        <View style={StudentCustomDrawerStyle.headerCenter}>
          <View style={StudentCustomDrawerStyle.profileBorder}>
            <Image
              source={imagePath.user}
              style={StudentCustomDrawerStyle.profileImage}
            />
          </View>
        </View>
        <View style={StudentCustomDrawerStyle.nameContainer}>
          <Text style={StudentCustomDrawerStyle.nameText}>User Name</Text>
        </View>
      </View>

      {/* Navigation */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={StudentCustomDrawerStyle.footer}>
        <View style={StudentCustomDrawerStyle.footerItem}>
          <Ionicons name="share-social-outline" size={22} color="#d2066c" />
          <Text style={StudentCustomDrawerStyle.footerItemText}>Tell a friend</Text>
        </View>

       

         <TouchableOpacity
            style={StudentCustomDrawerStyle.footerItem}
            onPress={handleSignOut}>
            <Ionicons name="exit-outline" size={22} color="#d2066c" />
          <Text style={StudentCustomDrawerStyle.footerItemText}>Sign Out</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudentCustomDrawer;
