import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import colors from "../../../styles/colors";
import imagePath from "../../constants/imagePath";

const overviewData = [
  { id: 1, title: "Add / Edit Student", icon: imagePath.AddEditStudent, count: "370" },
  { id: 2, title: "Student Profile", icon: imagePath.StudentProfile, count: "70" },
  { id: 3, title: "Class Allocation", icon: imagePath.ClassAllocation, count: "100" },
  { id: 4, title: "Student List with filters", icon: imagePath.StudentListWithFilters, count: "30" },
  { id: 5, title: "Import/ Export feature", icon: imagePath.ImportExportFeature, count: "30" },
  { id: 6, title: "Assigning subjects to the student", icon: imagePath.AssigningSubjects,},

];


const StudentManagement = () => {
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

export default StudentManagement;
