import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import WeatherOption from "./WeatherOption.js";

export default function Weather({temp, condition}) {
    const {icon, color, title, subtitle} = WeatherOption()[condition];
    return (
        <LinearGradient colors={color} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.topContainer}>
                <MaterialCommunityIcons size={96} name={icon} color="#FFFFFF"/>
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Dust",
        "Fog"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    topContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    temp: {
        fontSize: 36,
        color: "#FFFFFF"
    },
    title: {
        color: "#FFFFFF",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "600"
    }
});