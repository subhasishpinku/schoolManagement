import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    paddingTop: 50,
    paddingBottom: 30,
     backgroundColor: colors.tabColor,
  },
  headerCenter: {
    justifyContent: "center",
    alignItems: "center",
    
       },
  profileBorder: {
    borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 43,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  nameText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  footerItemText: {
    color: "#d2066c",
    fontSize: 15,
    marginLeft: 5,
  },
});
