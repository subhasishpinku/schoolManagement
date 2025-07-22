import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Alert
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import CheckBox from "expo-checkbox";
import Icon from "react-native-vector-icons/Ionicons";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";
import { useAuth } from "../../contexts/AuthContext";
// create a component
const SignUpScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  const handleSignUp = async () => {
    if (!selectedRole) {
      Alert.alert("Error", "Please select a role");
      return;
    }

    if (!fullName || !email || !password || !phone) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    if (phone.length < 10) {
      Alert.alert("Error", "Phone must be at least 10 digits");
      return;
    }

    if (!agreeTerms) {
      Alert.alert("Error", "Please agree to the Terms and Conditions");
      return;
    }
    setLoading(true);
    try {
      const result = await signup(fullName, email, password, phone,selectedRole);
      if (result.success) {
        console.log("User created successfully:", email);
        Alert.alert("Success", "Account created successfully!", [
          {
            text: "OK",
            onPress: () => navigation.navigate(navigationStrings.SIGNINSCREEN, { name: fullName }),
          },
        ]);
      } else {
        Alert.alert(
          "Sign Up Error",
          result.error || "An error occurred during sign up"
        );
      }
    } catch (error) {
      console.error("Sign up error:", error);
      Alert.alert("Sign Up Error", "An error occurred during sign up");
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
      {/* Role Selector */}
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedRole}
          onValueChange={(itemValue) => setSelectedRole(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Role Selector" value="" />
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Teacher" value="teacher" />
          <Picker.Item label="Student" value="student" />
          <Picker.Item label="Parent" value="parent" />
        </Picker>
      </View>
      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Icon name="person-outline" size={20} color="#888" />
        <TextInput
          placeholder="Full name"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          editable={!loading}
        />
      </View>
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
      <View style={styles.inputContainer}>
        <Icon name="call-outline" size={20} color="#888" />
        <TextInput
          placeholder="Phone number"
          style={styles.input}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          editable={!loading}
        />
      </View>
      {/* Terms & Conditions */}
      <View style={styles.termsRow}>
        <CheckBox value={agreeTerms} onValueChange={setAgreeTerms} />
        <Text style={styles.termsText}>
          By checking the box you agree to our{" "}
          <Text style={styles.link}>Terms and Conditions</Text>.
        </Text>
      </View>
      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleSignUp}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.goBackRow}>
        <Text style={styles.termsText}>
          Already Member
          <Text
            style={styles.link}
            onPress={() => navigation.navigate(navigationStrings.SIGNINSCREEN)}
          >
            Login Now
          </Text>
          .
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    flexGrow: 1,
  },
  topImage: {
    height: 190,
    width: 278,
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
  },
  goBackRow: {
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
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

//make this component available to the app
export default SignUpScreen;
