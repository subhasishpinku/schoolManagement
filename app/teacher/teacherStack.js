import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import TabRoutesTeacher from "./TabRoutesTeacher";

const Stack = createNativeStackNavigator();

export default function TeacherStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings.TABROUTESTEACHER} component={TabRoutesTeacher} />
        </Stack.Navigator>

    );
}