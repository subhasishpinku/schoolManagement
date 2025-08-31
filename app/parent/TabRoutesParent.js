import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import imagePath from "../constants/imagePath";
import colors from "../../styles/colors";
import styles from "./tabRoutesParentStyles"; // Import separated styles
import HomeParent from "./homeparent";
import ProfileParent from "./profileparent";
import ListParent from "./ListParent";


const BottomTab = createBottomTabNavigator();

function TabRoutesParent() {
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
        component={HomeParent}
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
        component={ListParent}
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
        component={ProfileParent}
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

export default TabRoutesParent;
