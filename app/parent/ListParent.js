//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

// create a component
const ListParent = () => {
    return (
        <View style={styles.container}>
            <Text>ListParent</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
});

//make this component available to the app
export default ListParent;
