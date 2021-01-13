import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';


function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Getting the Fucking Weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 160,
        backgroundColor: "#FEF5A2"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
});

export default Loading;