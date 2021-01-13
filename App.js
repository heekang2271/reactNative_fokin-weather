import React from 'react';
import Loading from './src/Loading.js';
import * as Location from "expo-location";
import {Alert} from "react-native";
import axios from "axios";

import Weather from "./src/Weather.js";

const API_KEY = "fc429eb093ad572f27c439226d0ee864";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: {temp},
        weather
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main
    });
  }
  
  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      const {
        coords: {
          latitude,
          longitude
        }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state;
    return (
      isLoading ? (
        <Loading />
      ) : (
        <Weather temp={Math.round(temp)} condition={condition} />
      )
    );
  }
}