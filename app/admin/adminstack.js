import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import TabRoutesAdmin from "./TabRoutesAdmin";

const Stack = createNativeStackNavigator();

export default function AdminStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings.TABROUTESADMIN} component={TabRoutesAdmin} />
        </Stack.Navigator>

    );
}