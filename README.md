# react-native-bouncing-ball

[![npm version](https://badge.fury.io/js/react-native-bouncing-ball.svg)](https://badge.fury.io/js/react-native-bouncing-ball) ![](https://img.shields.io/github/license/hankzhuo/react-native-bouncing-ball.svg)

react native component bouncing ball for both iOS and Android. There are two ways to generate balls, `<Image/>` and `<View/>`.

## Demo

Use the `<Image/>` generate ball

![ball_image](./example/images/ball-image.gif)

Use the `<View/>` generate ball

![ball_view](./example/images/ball-view.gif)

## Install

`npm i react-native-bouncing-ball --save`

## Example

Use the `<Image/>` generate ball

```javascript
import React, {PureComponent} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import BouncingBalls from 'react-native-bouncing-ball'

export default class BouncingBallsComponent extends PureComponent {
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
          imageBall={require('./images/bouncing_ball.png')}
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
  }
});

```

Use the `<View/>` generate ball

```javascript
import React, {PureComponent} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import BouncingBalls from 'react-native-bouncing-ball'

export default class BouncingBallsComponent extends PureComponent {
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
            backgroundColor: '#CDFFCD'
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
  }
});

```

## API

| Props | PropType | Default Value | Description |
| ----- | --------- | ------------| ------------- | 
| amount | `number` |  1 | the number of balls |
| animationDuration | `number` |  5000 | Every section animation time |
| animationType | `func` | `Easing.linear` | Animation type |
| minSpeed | `number` |  30 | The slowest speed of the ball |
| maxSpeed | `number` |  200 | The fastest speed of the ball |
| minSize | `number` |  40 | The largest ball size |
| maxSize | `number` |  100 | The smallest ball size |
| style | `object` |  null | The style of the ball |
| imageBall | `object` | null | Choose `Image` generate ball|

## LICENCE

MIT Licence
