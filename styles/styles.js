import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
  },
  flatList: {
    paddingHorizontal: 16,
  },
  cardContainer: {
    height: 130,
    width: width * 0.3,
    marginRight: 8,
  },
  card: {
    height: 130,
    width: width * 0.3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
    textAlign: "center",
    marginBottom: 8,
  },
  cardContainer1: {
    height: 160,
    width: width * 0.8,
    marginRight: 8,
  },
  card1: {
    height: 160,
    width: width * 0.8,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  text1: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
    textAlign: "center",
    marginBottom: 8,
  },
  card2: {
    height: 160,
    width: width * 0.9,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginLeft: 16,
  },
  item: {
    height: 100,
    width: "100%",
  },
});
