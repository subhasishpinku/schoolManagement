import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";
import colors from "../../../styles/colors";
import { useAuth } from "../../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RoutesDashboardAdmin from "../../admin/RoutesDashboardAdmin";
// create a component
const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const result = await login(email, password);
      if (result.success) {
        console.log("Signed in user:", email);
        // navigation.navigate("Dashboard", { name: email.split("@")[0] });
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          const parsedUser = JSON.parse(userData); // convert string to object
          console.log("Stored user object:", parsedUser);
          if (parsedUser.selectedRole == "admin") {
            navigation.navigate(navigationStrings.ROUTESDASHBOARDADMIN);
          } else if (parsedUser.selectedRole == "teacher") {
            navigation.navigate(navigationStrings.ROUTESDASHBOARDTEACHER);
          } else if (parsedUser.selectedRole == "student") {
            navigation.navigate(navigationStrings.ROUTESDASHBOARDSTUDENT);
          } else if (parsedUser.selectedRole == "parent") {
            navigation.navigate(navigationStrings.ROUTESDASHBOARDPARENT);
          }
          return parsedUser;
        } else {
          console.log("No user found in storage");
           Alert.alert(
          "Sign In Error",
          result.error || "No user found in storage"
        );
          return null;
        }
      } else {
        Alert.alert(
          "Sign In Error",
          result.error || "An error occurred during sign in"
        );
      }
    } catch (error) {
      console.error("Sign in error:", error);
      Alert.alert("Sign In Error", "An error occurred during sign in");
    } finally {
      setLoading(false);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={imagePath.getStarted} // Replace with your actual image
        style={styles.topImage}
        resizeMode="contain"
      />
      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={20} color="#888" />
        <TextInput
          placeholder="Valid email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          editable={!loading}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={20} color="#888" />
        <TextInput
          placeholder="Strong Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          editable={!loading}
        />
      </View>
      {/* Login Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleSignIn}>
        <Text style={styles.registerButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.termsRow}>
        <Text style={styles.termsText}>
          New Member
          <Text
            style={styles.link}
            onPress={() => navigation.navigate(navigationStrings.SIGNUPSCREEN)}
          >
            Register Now
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
    alignItems: "center",
    flexGrow: 1,
  },
  topImage: {
    height: 190,
    width: 278,
    marginTop: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 15,
    marginTop: 20,
    width: "100%",
  },
  input: {
    flex: 1,
    padding: 10,
  },
  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    flexWrap: "wrap",
    marginLeft: 100,
    marginTop: 20,
  },
  termsText: {
    fontSize: 13,
    color: "#555",
    flex: 1,
    marginLeft: 5,
  },
  link: {
    color: "#8B5CF6",
    textDecorationLine: "underline",
  },
  registerButton: {
    backgroundColor: "#6C63FF",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginTop: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

//make this component available to the app
export default SignInScreen;
