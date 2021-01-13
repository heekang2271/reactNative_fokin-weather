import React from "react";

export default function WeatherOption() {
    return (
        {
            Thunderstorm: {
                icon: "weather-lightning",
                color: ["#373B44", "#4286f4"],
                title: "Thunderstorm",
                subtitle: "Today is Thunderstorm"
            },
            Drizzle: {
                icon: "weather-rainy",
                color: ["#89F7FE", "#66A6FF"],
                title: "Drizzle",
                subtitle: "Today is Drizzle"
            },
            Rain: {
                icon: "weather-pouring",
                color: ["#00C6FB", "#005BEA"],
                title: "Rain",
                subtitle: "Today is Rain"
            },
            Snow: {
                icon: "weather-snowy-heavy",
                color: ["#7DE2FC", "#B9B6E5"],
                title: "Snow",
                subtitle: "Today is Snow"
            },
            Clear: {
                icon: "weather-sunny",
                color: ["#FF7300", "#FEF253"],
                title: "Clear",
                subtitle: "Today is Clear"
            },
            Clouds: {
                icon: "weather-cloudy",
                color: ["#D7D2CC", "#304352"],
                title: "Clouds",
                subtitle: "Today is Clouds"
            },
            Mist: {
                icon: "weather-fog",
                color: ["#4DA0B0", "#D39D38"],
                title: "Mist",
                subtitle: "Today is Mist"
            },
            Smoke: {
                icon: "weather-fog",
                color: ["#1D1D1D", "#4F4F4F"],
                title: "Smoke",
                subtitle: "Today is Smoke"
            },
            Haze: {
                icon: "weather-fog",
                color: ["#4DA0B0", "#D39D38"],
                title: "Haze",
                subtitle: "Today is Haze"
            },
            Dust: {
                icon: "weather-fog",
                color: ["#4DA0B0", "#D39D38"],
                title: "Dust",
                subtitle: "Today is Dust"
            },
            Fog: {
                icon: "weather-fog",
                color: ["#304352", "#d7d2cc"],
                title: "Fog",
                subtitle: "Today is Fog"
            },
            Sand: {
                icon: "weather-fog",
                color: ["#3e5151", "#decba4"],
                title: "Sand",
                subtitle: "Today is Sand"
            },
            Ash: {
                icon: "weather-fog",
                color: ["#606c88", "#3f4c6b"],
                title: "Ash",
                subtitle: "Today is Ash"
            },
            Squall: {
                icon: "weather-windy",
                color: ["#89F7FE", "#66A6FF"],
                title: "Squall",
                subtitle: "Today is Squall"
            },
            Tornado: {
                icon: "weather-tornado",
                color: ["#89F7FE", "#66A6FF"],
                title: "Tornado",
                subtitle: "Today is Tornado"
            },
        }
    );
}