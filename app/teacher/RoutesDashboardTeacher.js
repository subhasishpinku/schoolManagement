import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TeacherCustomDrawer from "./TeacherCustomDrawer";
import TeacherStack from "./teacherStack";
import TeacherProfile from "./teacherprofile";
import teacherDrawerOptions from "./teacherDrawerOptions";
import AttendanceStudent from "./AttendanceStudent";
import AttendanceTeacher from "./AttendanceTeacher";
import ClassTimetable from "./ClassTimetable";
import AssignHomework from "./AssignHomework";
const Drawer = createDrawerNavigator();

export default function RoutesDashboardTeacher() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <TeacherCustomDrawer
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
        component={TeacherStack}
        options={teacherDrawerOptions("Teacher")}
      />

      <Drawer.Screen
        name="Teacher Profile"
        component={TeacherProfile}
        options={teacherDrawerOptions("Teacher")}
      />

      <Drawer.Screen
        name="Attendance Student"
        component={AttendanceStudent}
        options={teacherDrawerOptions("Teacher")}
      />
      <Drawer.Screen
        name="Attendance Teacher"
        component={AttendanceTeacher}
        options={teacherDrawerOptions("Teacher")}
      />
       <Drawer.Screen
        name="Class Timetable"
        component={ClassTimetable}
        options={teacherDrawerOptions("Teacher")}
      />
       <Drawer.Screen
        name="Assign Homework"
        component={AssignHomework}
        options={teacherDrawerOptions("Teacher")}
      />
    </Drawer.Navigator>
  );
}
