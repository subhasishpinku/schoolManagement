import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ParentCustomDrawer from "./ParentCustomDrawer";
import ParentDrawerOptions from "./ParentDrawerOptions";
import ParentStack from "./ParentStack";

const Drawer = createDrawerNavigator();

export default function RoutesDashboardParent() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <ParentCustomDrawer
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
        component={ParentStack}
        options={ParentDrawerOptions("Parent")}
      />
    </Drawer.Navigator>
  );
}
