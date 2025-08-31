
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
import { useNavigation } from "@react-navigation/native";
import navigationStrings from "../../constants/navigationStrings";

const overviewData = [
  { id: 1, title: "Add / Edit Teacher", icon: imagePath.AddEditTeacher, count: "370" },
  { id: 2, title: "Teacher Profile", icon: imagePath.StudentProfile, count: "70" },
  { id: 3, title: "Assign Classes", icon: imagePath.AssignClasses, count: "100" },
  { id: 4, title: "Timetable", icon: imagePath.StudentListWithFilters, count: "30" },
  { id: 5, title: "Teacher List", icon: imagePath.TeacherList, count: "30" },
  { id: 6, title: "Assign Teacher", icon: imagePath.assentTeacher },
  { id: 7, title: "Assigning classes to the teacher", icon: imagePath.AssigningClassTeacher },

];


const TeacherManagement = () => {
    const navigation = useNavigation(); // 👈 use navigation hook

  const handlePress = (item) => {
    if (item.id === 6) {
      navigation.navigate(navigationStrings.ASSENTTEACHER); // 👈 navigate to new screen
    }
  };
  return (
    <ScrollView style={styles.container}>
      {/* Overview Section */}
      <Text style={styles.sectionTitle}>Overview</Text>
      <View style={styles.grid}>
        {overviewData.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}
          onPress={() => handlePress(item)} 
          >
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

export default TeacherManagement;
