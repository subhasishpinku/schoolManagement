import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import AdminCustomDrawer from "./AdminCustomDrawer";
import AdminStack from "./adminstack";
import ProfileAdmin from "./profileadmin";
import StudentManagement from "./AdminMenuScreen/StudentManagement";
import TeacherManagement from "./AdminMenuScreen/TeacherManagement";
import AttendanceSystem from "./AdminMenuScreen/AttendanceSystem";
import TimetableManagement from "./AdminMenuScreen/TimetableManagement";
import ExamGrading from "./AdminMenuScreen/ExamGrading";
import AssignmentHomeWork from "./AdminMenuScreen/AssignmentHomeWork";
import EventNoticeBoard from "./AdminMenuScreen/EventNoticeBoard";
import FeeManagement from "./AdminMenuScreen/FeeManagement";
import MessagingNotifications from "./AdminMenuScreen/MessagingNotifications";
import SettingsProfile from "./AdminMenuScreen/SettingsProfile";
import ReportsAnalytics from "./AdminMenuScreen/ReportsAnalytics";
import { getAdminHeaderOptions } from "./screenOptions";
import MonitoringStudent from "./AdminMenuScreen/MonitoringStudent";
import OtherStaffManagement from "./AdminMenuScreen/OtherStaffManagement";
import LeaveManagement from "./AdminMenuScreen/LeaveManagement";
import EventsManagement from "./AdminMenuScreen/EventsManagement";
import CentralNotice from "./AdminMenuScreen/CentralNotice";
import HolidayManagement from "./AdminMenuScreen/HolidayManagement";
import ExamAssign from "./AdminMenuScreen/ExamAssign";
import BulkResultAssign from "./AdminMenuScreen/BulkResultAssign";
const Drawer = createDrawerNavigator();

export default function RoutesDashboardAdmin() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <AdminCustomDrawer
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
        component={AdminStack}
        options={{
          ...getAdminHeaderOptions("Dashboard", "speedometer-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="speedometer-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Student Management"
        component={StudentManagement}
        options={{
          ...getAdminHeaderOptions("Student Management", "people-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Teacher Management"
        component={TeacherManagement}
        options={{
          ...getAdminHeaderOptions("Teacher Management", "school-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Monitoring Student"
        component={MonitoringStudent}
        options={{
          ...getAdminHeaderOptions("Teacher Management", "school-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="eye-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Other Staff Management"
        component={OtherStaffManagement}
        options={{
          ...getAdminHeaderOptions("Teacher Management", "school-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Leave Management"
        component={LeaveManagement}
        options={{
          ...getAdminHeaderOptions("Teacher Management", "calendar-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Events Management"
        component={EventsManagement}
        options={{
          ...getAdminHeaderOptions("Teacher Management", "calendar-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="sparkles-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Attendance System"
        component={AttendanceSystem}
        options={{
          ...getAdminHeaderOptions("Attendance System", "calendar-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Central Notice"
        component={CentralNotice}
        options={{
          ...getAdminHeaderOptions("Attendance System", "megaphone-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="megaphone-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Holiday Management"
        component={HolidayManagement}
        options={{
          ...getAdminHeaderOptions("Timetable Management", "time-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-clear-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Exam Assign"
        component={ExamAssign}
        options={{
          ...getAdminHeaderOptions("Timetable Management", "time-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-clear-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Timetable Management"
        component={TimetableManagement}
        options={{
          ...getAdminHeaderOptions("Timetable Management", "time-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Exam & Grading"
        component={ExamGrading}
        options={{
          ...getAdminHeaderOptions("Exam & Grading", "clipboard-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="clipboard-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Assignment & Homework"
        component={AssignmentHomeWork}
        options={{
          ...getAdminHeaderOptions(
            "Assignment & Homework",
            "document-text-outline"
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Event & Notice Board"
        component={EventNoticeBoard}
        options={{
          ...getAdminHeaderOptions("Event & Notice Board", "megaphone-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="megaphone-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Fee Management"
        component={FeeManagement}
        options={{
          ...getAdminHeaderOptions("Fee Management", "cash-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messaging & Notifications"
        component={MessagingNotifications}
        options={{
          ...getAdminHeaderOptions(
            "Messaging & Notifications",
            "chatbubbles-outline"
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings and Profile"
        component={SettingsProfile}
        options={{
          ...getAdminHeaderOptions("Settings and Profile", "settings-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bulk Result Assign"
        component={BulkResultAssign}
        options={{
          ...getAdminHeaderOptions(
            "Reports & Analytics",
            "document-text-outline"
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Reports & Analytics"
        component={ReportsAnalytics}
        options={{
          ...getAdminHeaderOptions("Reports & Analytics", "bar-chart-outline"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
