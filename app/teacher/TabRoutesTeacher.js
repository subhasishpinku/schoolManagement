import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import imagePath from "../constants/imagePath";
import colors from "../../styles/colors";
import TeacherHome from "./teacherhome";
import TeacherProfile from "./teacherprofile";
import ListTeacher from "./ListTeacher";
import TabRoutesTeacherStyle from "./TabRoutesTeacherStyle";

const BottomTab = createBottomTabNavigator();

function TabRoutesTeacher() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.blackOpacity50,
        tabBarActiveTintColor: colors.themeColor,
        tabBarStyle: TabRoutesTeacherStyle.tabBarStyle,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TeacherHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={[
                TabRoutesTeacherStyle.tabIcon,
                { tintColor: focused ? colors.themeColor : colors.white },
              ]}
              source={imagePath.home}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="List"
        component={ListTeacher}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={[
                TabRoutesTeacherStyle.tabIcon,
                { tintColor: focused ? colors.themeColor : colors.white },
              ]}
              source={imagePath.list}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={TeacherProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={[
                TabRoutesTeacherStyle.tabIcon,
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

export default TabRoutesTeacher;
