//import liraries
//import liraries
import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import imagePath from "../constants/imagePath";
import navigationStrings from "../constants/navigationStrings";
import colors from '../../styles/colors';
// create a component
const SecondScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(navigationStrings.THIRDSCREEN);
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.splashContainer}>
      <Image
        source={imagePath.slide}
        style={styles.logo}
        resizeMode="contain"
      />
      <View>
        <Text  style={styles.text}>SCHOOL MANAGEMENT SYSTEM</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  logo: {
    width: 500,
    height: 500,
  },
  text:{
      fontSize: 30,
      fontWeight: 'bold',  
      textAlign: "center"
    }
});

//make this component available to the app
export default SecondScreen;
