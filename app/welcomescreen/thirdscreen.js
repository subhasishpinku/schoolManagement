//import liraries
//import liraries
import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import imagePath from "../constants/imagePath";
import navigationStrings from "../constants/navigationStrings";
import colors from '../../styles/colors';

// create a component
const ThirdScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(navigationStrings.FOURTHSCREEN);
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.splashContainer}>
      <Image
        source={imagePath.slide1}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.textView}>
              <Text  style={styles.text}>SMART SOLUTIONS FOR SMARTER SCHOOL</Text>
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
    width: 400,
    height: 400,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  textView:{
    marginTop: 80
  }
});

//make this component available to the app
export default ThirdScreen;
