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
  { id: 1, title: "Today’s Schedule", icon: imagePath.todayschedule, count: "370" },
  { id: 2, title: "Homework Assignments", icon: imagePath.homework, count: "70" },
  { id: 3, title: "Grades", icon: imagePath.grades, count: "100" },
  { id: 4, title: "Attendance Summary", icon: imagePath.attendanceSummary, count: "30" },
  { id: 5, title: "Subjects", icon: imagePath.attendanceSummary,},
  { id: 6, title: "Classes", icon: imagePath.attendanceSummary,},
  { id: 7, title: "Homework", icon: imagePath.attendanceSummary,},
  { id: 8, title: "Notifications (Events, Announcements, Holidays)", icon: imagePath.attendanceSummary,},
  { id: 9, title: "E-Library Access (digital books, notes, materials)", icon: imagePath.attendanceSummary,},

];



const HomeStudent = () => {
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

export default HomeStudent;
