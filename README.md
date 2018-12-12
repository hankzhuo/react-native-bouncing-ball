# react-native-bouncing-ball

react native component bouncing ball for both iOS and Android

## Demo

Use the `image` generate ball

![ball_image](./example/images/ball-image.gif)

Use the `View` generate ball

![ball_view](./example/images/ball-view.gif)

## Install

`npm i react-native-bouncing-ball --save`

## Usage

Use the `image` generate ball

```javascript
import React, {PureComponent} from 'react';
import { StyleSheet, ImageBackground} from 'react-native';
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
          imageCircle={require('./images/bouncing_ball.png')}
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

Use the `View` generate ball

```javascript
import React, {PureComponent} from 'react';
import { StyleSheet, ImageBackground} from 'react-native';
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
| amount | number |  1 | Number of ball |
| animationDuration | number |  5000 | Duration of the animation |
| minSpeed | number |  10 | Minimum speed |
| maxSpeed | number |  100 | Maximum speed |
| minSize | number |  40 | Minimum size |
| maxSize | number |  100 | Maximum size |
| style | object |  null | style of balls |
| imageCircle | object | null | Choose `View` or `Image` generate ball|


## LICENCE

MIT

