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
  { id: 1, title: "Total Students", icon: imagePath.total, count: "370" },
  { id: 2, title: "Teacher", icon: imagePath.teacher, count: "70" },
  { id: 3, title: "Class", icon: imagePath.class, count: "100" },
  { id: 4, title: "Event", icon: imagePath.event, count: "30" },
];

const quickLinksData = [
  { id: 1, title: "Add Student", icon: imagePath.addStudent, count: "500" },
  { id: 2, title: "Add Teacher", icon: imagePath.addTeacher, count: "60" },
  { id: 3, title: "View Reports", icon: imagePath.viewReport, count: "5000" },
  {
    id: 4,
    title: "Recent activity logs",
    icon: imagePath.activityLogs,
    count: "370",
  },
];

const HomeAdmin = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Overview Section */}
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

      {/* Quick Links Section */}
      <Text style={styles.sectionTitle}>Quick links</Text>
      <View style={styles.grid}>
        {quickLinksData.map((item) => (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#6C63FF",
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

export default HomeAdmin;
