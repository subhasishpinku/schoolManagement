import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import TabRoutesStudent from "./TabRoutesStudent";

const Stack = createNativeStackNavigator();

export default function StudentStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings.TABROUTESSTUDENT} component={TabRoutesStudent} />
        </Stack.Navigator>

    );
}