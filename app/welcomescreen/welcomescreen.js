//import liraries
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import colors from '../../styles/colors';

// create a 
const WelcomeScreen = ({ navigation }) => {
    
 useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(navigationStrings.SECONDSCREEN);
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);
     return (
    <View style={styles.splashContainer}>
      <Image
        source={imagePath.homeView}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
    splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
   logo: {
    width: 500,
    height: 500,
  },
});

//make this component available to the app
export default WelcomeScreen;
