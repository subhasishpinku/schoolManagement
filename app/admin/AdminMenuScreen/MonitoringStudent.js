//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// create a component
const MonitoringStudent = () => {
    return (
        <View style={styles.container}>
            <Text>Monitoring Student</Text>
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
export default MonitoringStudent;
