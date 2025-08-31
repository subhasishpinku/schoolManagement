import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StudentCustomDrawer from "./StudentCustomDrawer";
import StudentStack from "./studentStack";
import studentDrawerOptions from "./studentDrawerOptions";
import AttendanceView from "./AttendanceView";
import ClassTimetable from "./ClassTimetable";
import ExamScheduleResults from "./ExamScheduleResults";
import OnlineHomeworkSubmission from "./OnlineHomeworkSubmission";
const Drawer = createDrawerNavigator();

export default function RoutesDashboardStudent() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <StudentCustomDrawer
          {...props}
          initialRouteName="Home"
          screenOption={{
            drawerActiveBackgroundColor: "#f2bbbb",
            drawerActiveTintColor: "#ffffff",
            drawerInactiveTintColor: "#333333",
          }}
        />
      )}
    >
      <Drawer.Screen
        name="Dashboard"
        component={StudentStack}
        options={studentDrawerOptions("Student")}
      />
      <Drawer.Screen
        name="Attendance View"
        component={AttendanceView}
        options={studentDrawerOptions("Student")}
      />
      <Drawer.Screen
        name="Class Timetable"
        component={ClassTimetable}
        options={studentDrawerOptions("Student")}
      />
      <Drawer.Screen
        name="Exam Schedule Results"
        component={ExamScheduleResults}
        options={studentDrawerOptions("Student")}
      />
      <Drawer.Screen
        name="Online Homework Submission"
        component={OnlineHomeworkSubmission}
        options={studentDrawerOptions("Student")}
      />
    </Drawer.Navigator>
  );
}
