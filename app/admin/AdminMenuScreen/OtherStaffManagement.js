//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// create a component
const OtherStaffManagement = () => {
    return (
        <View style={styles.container}>
            <Text>Other Staff Management</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.backgroundColor,
    },
});

//make this component available to the app
export default OtherStaffManagement;
