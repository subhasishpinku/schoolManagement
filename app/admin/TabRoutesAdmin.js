import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import imagePath from "../constants/imagePath";
import colors from "../../styles/colors";
import HomeAdmin from "./homeadmin";
import ProfileAdmin from "./profileadmin";
import ListAdmin from "./ListAdmin";
import styles from "./TabRoutesAdminStyle"; // Import separated styles

const BottomTab = createBottomTabNavigator();

function TabRoutesAdmin() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.blackOpacity50,
        tabBarActiveTintColor: colors.themeColor,
        tabBarStyle: styles.tabBarStyle,
        
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeAdmin}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={[
                styles.tabIcon,
                { tintColor: focused ? colors.themeColor : colors.white },
              ]}
              source={imagePath.home}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="List"
        component={ListAdmin}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={[
                styles.tabIcon,
                { tintColor: focused ? colors.themeColor : colors.white },
              ]}
              source={imagePath.list}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileAdmin}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? colors.themeColor : colors.white,
                  transform: focused ? [{ scale: 1.2 }] : [{ scale: 1 }],
                },
              ]}
              source={imagePath.profile}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default TabRoutesAdmin;
