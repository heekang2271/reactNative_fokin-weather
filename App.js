import React from 'react';
import Loading from './src/Loading.js';
import * as Location from "expo-location";
import {Alert} from "react-native";
import axios from "axios";

const API_KEY = "fc429eb093ad572f27c439226d0ee864";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
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
      this.setState({isLoading: false});
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading} = this.state;
    return (
      isLoading ? (
        <Loading />
      ) : (
        null
      )
    );
  }
}