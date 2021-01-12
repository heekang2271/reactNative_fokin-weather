import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './src/Loading.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Loading>

      </Loading>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
