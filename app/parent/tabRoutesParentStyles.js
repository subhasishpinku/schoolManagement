import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabBarStyle: {
     backgroundColor: colors.title,
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
     overflow: "hidden", // Ensures rounded corners work
     height: 70, // Adjust height for visibility
     paddingBottom: 5, 
     height: 120
   },
});
