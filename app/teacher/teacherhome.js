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
  { id: 1, title: "Classes Assigned", icon: imagePath.classAssigned, count: "370" },
  { id: 2, title: "Attendance Overview", icon: imagePath.attendanceView, count: "70" },
  { id: 3, title: "Upcoming Exams", icon: imagePath.upcomingEvent, count: "100" },
  { id: 4, title: "Announcements", icon: imagePath.announced, count: "30" },
  { id: 5, title: "Marks Entry & Report Card Generation", icon: imagePath.announced, },
  { id: 6, title: "Student Performance Analytics", icon: imagePath.announced, },
  { id: 7, title: "Communication with Parents (chat/notice)", icon: imagePath.announced, },

];



const TeacherHome = () => {
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

export default TeacherHome;
