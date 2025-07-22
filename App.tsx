import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./app/screen/Auth/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./app/Navigation/HomeStack";
import { AuthProvider } from "./app/contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
