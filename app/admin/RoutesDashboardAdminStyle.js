import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const RoutesDashboardAdminStyle = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.title,
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitleText: {
    color: "white",
    fontSize: 18,
    marginLeft: 70,
    fontWeight: "bold",
  },
  headerImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
   headersImage: {
    width: 40,
    height: 40,
    marginLeft: 40,
    borderRadius: 10
  },
   headersLeftImage: {
    width: 40,
    height: 40,
    marginLeft: 0,
    borderRadius: 10
  },
  headerLeftContainer: {
    marginLeft: 10,
  },
  headerRightButton: {
    marginRight: 10,
  },
  headerRightContainer: {
    marginRight: 15,
  },
});

export default RoutesDashboardAdminStyle;
