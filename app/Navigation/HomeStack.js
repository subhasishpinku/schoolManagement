import { useEffect, useState } from "react";
import navigationStrings from "../constants/navigationStrings";
import { useAuth } from "../contexts/AuthContext";
import SignInScreen from "../screen/Auth/SignInScreen";
import SignUpScreen from "../screen/Auth/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeAdmin from "../admin/homeadmin";
import ProfileAdmin from "../admin/profileadmin";
import TeacherHome from "../teacher/teacherhome";
import TeacherProfile from "../teacher/teacherprofile";
import HomeStudent from "../student/homestudent";
import ProfileStudent from "../student/profilestudent";
import HomeParent from "../parent/homeparent";
import ProfileParent from "../parent/profileparent";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const { user, loading } = useAuth();
  const [selectedRole, setSelectedRole] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
    //   await AsyncStorage.clear();
      //await AsyncStorage.removeItem("user");
      const user = await getUser();
      console.log(user);
    };
    fetchUser();
  }, []);
  const getUser = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData !== null) {
        const user = JSON.parse(userData);
        const { email, fullName, password, phone, selectedRole, uid } = user;
        setSelectedRole(selectedRole);
        console.log("Email:", email);
        console.log("Full Name:", fullName);
        console.log("Password:", password);
        console.log("Phone:", phone);
        console.log("Role:", selectedRole);
        console.log("UID:", uid);
        return user;
      }
    } catch (e) {
      console.error("Failed to load user", e);
    }
  };
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <>
          <Stack.Screen
            name={navigationStrings.SIGNINSCREEN}
            component={SignInScreen}
          />
          <Stack.Screen
            name={navigationStrings.SIGNUPSCREEN}
            component={SignUpScreen}
          />
        </>
      ) : selectedRole === "admin" ? (
        <>
          <Stack.Screen
            name={navigationStrings.HOMEADMIN}
            component={HomeAdmin}
          />
          <Stack.Screen
            name={navigationStrings.PROFILEADMIN}
            component={ProfileAdmin}
          />
        </>
      ) : selectedRole === "teacher" ? (
        <>
          <Stack.Screen
            name={navigationStrings.TEACHERHOME}
            component={TeacherHome}
          />
          <Stack.Screen
            name={navigationStrings.TEACHERPROFILE}
            component={TeacherProfile}
          />
        </>
      ) : selectedRole === "student" ? (
        <>
          <Stack.Screen
            name={navigationStrings.HOMESTUDENT}
            component={HomeStudent}
          />
          <Stack.Screen
            name={navigationStrings.PROFILESTUDENT}
            component={ProfileStudent}
          />
        </>
      ): selectedRole === "parent" ? (
        <>
          <Stack.Screen
            name={navigationStrings.HOMEPARENT}
            component={HomeParent}
          />
          <Stack.Screen
            name={navigationStrings.PROFILEPARENT}
            component={ProfileParent}
          />
        </>
      ): (
        <>
          <Stack.Screen
            name={navigationStrings.SIGNINSCREEN}
            component={SignInScreen}
          />
          <Stack.Screen
            name={navigationStrings.SIGNUPSCREEN}
            component={SignUpScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
