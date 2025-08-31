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
import WelcomeScreen from "../welcomescreen/welcomescreen";
import SecondScreen from "../welcomescreen/secondscreen";
import ThirdScreen from "../welcomescreen/thirdscreen";
import FourthScreen from "../welcomescreen/fourthscreen";
import FifthScreen from "../welcomescreen/fifthscreen";
import RoutesDashboardAdmin from "../admin/RoutesDashboardAdmin";
import RoutesDashboardTeacher from "../teacher/RoutesDashboardTeacher";
import RoutesDashboardStudent from "../student/RoutesDashboardStudent";
import GetStartScreen from "../welcomescreen/GetStartScreen";
import RoutesDashboardParent from "../parent/RoutesDashboardParent";
import AssentTeacher from "../admin/AssentTeacher";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const { user, loading } = useAuth();
  const [selectedRole, setSelectedRole] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      // await AsyncStorage.clear();
      // await AsyncStorage.removeItem("user");
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
            name={navigationStrings.WELCOMESCREEN}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name={navigationStrings.SECONDSCREEN}
            component={SecondScreen}
          />
          <Stack.Screen
            name={navigationStrings.THIRDSCREEN}
            component={ThirdScreen}
          />
          <Stack.Screen
            name={navigationStrings.FOURTHSCREEN}
            component={FourthScreen}
          />
          <Stack.Screen
            name={navigationStrings.FIFTHSCREEN}
            component={FifthScreen}
          />
          <Stack.Screen
            name={navigationStrings.GETSTARTSCREEN}
            component={GetStartScreen}
          />
          <Stack.Screen
            name={navigationStrings.SIGNINSCREEN}
            component={SignInScreen}
          />
          <Stack.Screen
            name={navigationStrings.SIGNUPSCREEN}
            component={SignUpScreen}
          />
           <Stack.Screen
            name={navigationStrings.ROUTESDASHBOARDADMIN}
            component={RoutesDashboardAdmin}
          />
           <Stack.Screen
            name={navigationStrings.ROUTESDASHBOARDTEACHER}
            component={RoutesDashboardTeacher}
          />
           <Stack.Screen
            name={navigationStrings.ROUTESDASHBOARDSTUDENT}
            component={RoutesDashboardStudent}
          />
          <Stack.Screen
            name={navigationStrings.ROUTESDASHBOARDPARENT}
            component={RoutesDashboardParent}
          />
        </>
      ) : selectedRole === "admin" ? (
        <>
         <Stack.Screen
            name={navigationStrings.ROUTESDASHBOARDADMIN}
            component={RoutesDashboardAdmin}
          />
          <Stack.Screen
            name={navigationStrings.SIGNINSCREEN}
            component={SignInScreen}
          />
           <Stack.Screen
            name={navigationStrings.SIGNUPSCREEN}
            component={SignUpScreen}
          />
          <Stack.Screen
            name={navigationStrings.HOMEADMIN}
            component={HomeAdmin}
          />
          <Stack.Screen
            name={navigationStrings.PROFILEADMIN}
            component={ProfileAdmin}
          />
           <Stack.Screen
            name={navigationStrings.ASSENTTEACHER}
            component={AssentTeacher}
          />
        </>
      ) : selectedRole === "teacher" ? (
        <>
         <Stack.Screen
            name={navigationStrings.ROUTESDASHBOARDTEACHER}
            component={RoutesDashboardTeacher}
          />
           <Stack.Screen
            name={navigationStrings.SIGNINSCREEN}
            component={SignInScreen}
          />
           <Stack.Screen
            name={navigationStrings.SIGNUPSCREEN}
            component={SignUpScreen}
          />
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
            name={navigationStrings.ROUTESDASHBOARDSTUDENT}
            component={RoutesDashboardStudent}
          />
           <Stack.Screen
            name={navigationStrings.SIGNINSCREEN}
            component={SignInScreen}
          />
           <Stack.Screen
            name={navigationStrings.SIGNUPSCREEN}
            component={SignUpScreen}
          />
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
            name={navigationStrings.ROUTESDASHBOARDPARENT}
            component={RoutesDashboardParent}
          />
         <Stack.Screen
            name={navigationStrings.SIGNINSCREEN}
            component={SignInScreen}
          />
           <Stack.Screen
            name={navigationStrings.SIGNUPSCREEN}
            component={SignUpScreen}
          />
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
            name={navigationStrings.WELCOMESCREEN}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name={navigationStrings.SECONDSCREEN}
            component={SecondScreen}
          />
          <Stack.Screen
            name={navigationStrings.THIRDSCREEN}
            component={ThirdScreen}
          />
           <Stack.Screen
            name={navigationStrings.FOURTHSCREEN}
            component={FourthScreen}
          />
          <Stack.Screen
            name={navigationStrings.FIFTHSCREEN}
            component={FifthScreen}
          />
          
           <Stack.Screen
            name={navigationStrings.GETSTARTSCREEN}
            component={GetStartScreen}
          />
          <Stack.Screen
            name={navigationStrings.SIGNINSCREEN}
            component={SignInScreen}
          />
          <Stack.Screen
            name={navigationStrings.SIGNUPSCREEN}
            component={SignUpScreen}
          />
          <Stack.Screen
            name={navigationStrings.ROUTESDASHBOARDADMIN}
            component={RoutesDashboardAdmin}
          />
          <Stack.Screen
            name={navigationStrings.ROUTESDASHBOARDTEACHER}
            component={RoutesDashboardTeacher}
          />
           <Stack.Screen
            name={navigationStrings.ROUTESDASHBOARDSTUDENT}
            component={RoutesDashboardStudent}
          />
            <Stack.Screen
            name={navigationStrings.ROUTESDASHBOARDPARENT}
            component={RoutesDashboardParent}
          />

          
        </>
      )}
    </Stack.Navigator>
  );
}
