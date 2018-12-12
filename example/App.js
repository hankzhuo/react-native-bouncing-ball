/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
// import BouncingBalls from 'react-native-bouncing-ball'
import BouncingBalls from './BouncingBalls'

export default class App extends Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={require('./images/background.jpg')}>
        <BouncingBalls
          amount={10}
          animationDuration={5000}
          minSpeed={30}
          maxSpeed={200}
          minSize={40}
          maxSize={100}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)'
          }}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
