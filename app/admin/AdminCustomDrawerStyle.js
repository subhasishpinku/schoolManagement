import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const AdminCustomDrawerStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: colors.tabColor,
  },
  profileWrapper: {
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
  userNameContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  userNameText: {
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

export default AdminCustomDrawerStyle;
