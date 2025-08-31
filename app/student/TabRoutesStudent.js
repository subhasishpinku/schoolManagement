import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import imagePath from "../constants/imagePath";
import colors from "../../styles/colors";
import HomeStudent from "./homestudent";
import ProfileStudent from "./profilestudent";
import ListStudent from "./ListStudent";
import styles from "./tabRoutesStudentStyles";

const BottomTab = createBottomTabNavigator();

function TabRoutesStudent() {
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
        component={HomeStudent}
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
        component={ListStudent}
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
        component={ProfileStudent}
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

export default TabRoutesStudent;
