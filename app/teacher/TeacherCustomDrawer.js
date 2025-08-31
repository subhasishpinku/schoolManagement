import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import imagePath from "../constants/imagePath";
import { Ionicons } from "@expo/vector-icons";
import TeacherCustomDrawerStyle from "./TeacherCustomDrawerStyle";
import navigationStrings from "../constants/navigationStrings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const TeacherCustomDrawer = (props) => {
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
    <View style={TeacherCustomDrawerStyle.container}>
      {/* Header */}
      <View
        style={TeacherCustomDrawerStyle.headerBackground}
      >
        <View style={TeacherCustomDrawerStyle.headerCenter}>
          <View style={TeacherCustomDrawerStyle.profileBorder}>
            <Image
              source={imagePath.user}
              style={TeacherCustomDrawerStyle.profileImage}
            />
          </View>
        </View>
        <View style={TeacherCustomDrawerStyle.nameContainer}>
          <Text style={TeacherCustomDrawerStyle.nameText}>User Name</Text>
        </View>
      </View>

      {/* Navigation */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={TeacherCustomDrawerStyle.footer}>
        <View style={TeacherCustomDrawerStyle.footerItem}>
          <Ionicons name="share-social-outline" size={22} color="#d2066c" />
          <Text style={TeacherCustomDrawerStyle.footerItemText}>Tell a friend</Text>
        </View>

        
        <View>
          <TouchableOpacity
            style={TeacherCustomDrawerStyle.footerItem}
            onPress={handleSignOut}>
            <Ionicons name="exit-outline" size={22} color="#d2066c" />
            <Text style={TeacherCustomDrawerStyle.footerItemText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TeacherCustomDrawer;
