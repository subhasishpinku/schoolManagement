import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import colors from "../../styles/colors";
import imagePath from "../constants/imagePath";

const overviewData = [
  { id: 1, title: "Internal", icon: imagePath.AddEditTeacher, count: "370" },
  { id: 2, title: "External / Permanent", icon: imagePath.StudentProfile, count: "70" },
];

const AssentTeacher = () => {
  return (
    <View style={styles.container}>
      {/* 🔹 Custom Title Bar */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Assign Teacher</Text>
      </View>

      <ScrollView>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.grid}>
          {overviewData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <Image
                source={item.icon}
                style={styles.icon}
                resizeMode="contain"
              />
              {item.count && <Text style={styles.count}>{item.count}</Text>}
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,

  },
  header: {
   backgroundColor: colors.title,
    paddingVertical: 15,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    marginTop: 30,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  card: {
    width: "48%",
    backgroundColor: colors.cardColor,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  count: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  cardText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginTop: 4,
  },
});

export default AssentTeacher;
