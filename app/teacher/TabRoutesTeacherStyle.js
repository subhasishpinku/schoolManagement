import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.title,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden", // Ensures rounded corners work
    height: 70, // Adjusts tab height
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
});
