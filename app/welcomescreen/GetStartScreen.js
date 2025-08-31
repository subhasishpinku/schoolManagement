import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import imagePath from "../constants/imagePath";
import navigationStrings from "../constants/navigationStrings";
import colors from "../../styles/colors";
const GetStartScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.replace(navigationStrings.SIGNINSCREEN); // Or your target screen
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>r
      <Image
        source={imagePath.InnoviunLogo}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.textView}>
        <Text style={styles.text}>
          Initiated By Innoviun Social And Welfare Foundation.
        </Text>
        <Text style={styles.text}>(A Non-Profit Organization)</Text>
      </View>

      {/* Navigation Button */}
      <View style={styles.getStart}>
        
   <View style={{ width: 100, height:50,  }}>
    <Text style={{alignItems: "center", alignContent:"center", marginTop: 12, marginLeft: 10, fontWeight: "bold", fontSize: 18}}>Get Start</Text>
   </View>
   <View style={{width: 50,  height:50, marginLeft: 10}}>
    <TouchableOpacity
       style={styles.nextButton}
    onPress={() => navigation.navigate(navigationStrings.SIGNINSCREEN)}
        >
        <Image
          source={imagePath.nextIcon} // replace with your arrow image
          style={styles.nextIcon}
        />
      </TouchableOpacity>
   </View>
      
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  logo: {
    width: 400,
    height: 400,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  textView: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    position: "absolute",
    backgroundColor: "black",
    borderRadius: 30,
    padding: 15,
  },
  getStart:{
     position: "absolute",
    bottom: 50,
    right: 30,
   flexDirection: "row"
  },
  nextIcon: {
    width: 25,
    height: 25,
  },
});

export default GetStartScreen;
