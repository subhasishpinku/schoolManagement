import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import TabRoutesParent from "./TabRoutesParent";

const Stack = createNativeStackNavigator();

export default function ParentStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings.TABROUTESPARENT} component={TabRoutesParent} />
        </Stack.Navigator>

    );
}