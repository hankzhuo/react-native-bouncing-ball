import React, {PureComponent} from 'react'
import {View, Image, StyleSheet, Dimensions, Animated, Easing} from 'react-native'
import PropTypes from 'prop-types';

class BouncingBalls extends PureComponent {

  static propTypes = {
   // todo
  }

  static defaultProps = {
   // todo
  }

  constructor(props) {
    super(props)
    
    this.screenWidth = Dimensions.get('window').width
    this.screenHeight = Dimensions.get('window').height
    this.circles = this.generateCircles()
    
    this.state = {
      position: new Animated.ValueXY({x: 0, y: 0})
    }
  }
  
  componentDidMount() {
    this.traverseCircles()
  }
  
  componentWillUnmount() {
    this.circles.forEach((item, index) => {
      this.state[`position${index}`].stopAnimation()
    })
  }
  
  traverseCircles() {
    let _circle
    this.circles.forEach((circle, index) => {
      this.setState({
        [`position${index}`]: new Animated.ValueXY({x: circle.props.x, y: circle.props.y})
      }, () => {
        _circle = this.updateCirclePosition(circle.props, index)
        this.circleStartAnimation(_circle, index)
      })
    })
  }
  
  circleStartAnimation(circle, index) {
    const {animationDuration} = this.props
    Animated.timing(
      this.state[`position${index}`],
      {
        toValue: {x: circle.x, y: circle.y},
        duration: animationDuration,
        easing: Easing.linear
      }
    ).start(() => {
      this.setState({
        [`position${index}`]: new Animated.ValueXY({x: circle.x, y: circle.y})
      }, () => {
        let _circle = this.updateCirclePosition(circle, index)
        requestAnimationFrame(() => this.circleStartAnimation(_circle, index))
      })
    })
  }
  
  updateCirclePosition(circle, index) {
    const _circle = Object.assign({}, circle)
    const height = width = circle.style[1].width
    const maxWidth = this.screenWidth - width
    const maxHeight = this.screenHeight - height
    
    _circle.x = _circle.x + _circle.speedX
    _circle.y = _circle.y + _circle.speedY
    
    if (_circle.x <= 0) {
      _circle.x = 0
      _circle.speedX *= (-1)
    } else if (_circle.x >= maxWidth) {
      _circle.x = maxWidth
      _circle.speedX *= (-1)
    }
    
    if (_circle.y <= 0) {
      _circle.y = 0
      _circle.speedY *= (-1)
    } else if (_circle.y >= maxHeight) {
      _circle.y = maxHeight
      _circle.speedY *= (-1)
    }
    
    return _circle
  }
  
  getRangeFromMinToMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  generateCircles() {
    const {amount, minSpeed, maxSpeed, minSize, maxSize, style, imageCircle} = this.props
    const circles = []
    let width, height, borderRadius, innerStyle, restProps, item, direction
    
    if (amount < 1) return null
    
    for (var i = 0; i < amount; i++) {
      height = width = this.getRangeFromMinToMax(minSize, maxSize)
      borderRadius = height * 0.5
      direction = Math.round(Math.random()) === 0 ? -1 : 1
  
      innerStyle = {
        height,
        width,
        borderRadius
      }
      
      restProps = {
        x: this.getRangeFromMinToMax(0, this.screenWidth - width),
        y: this.getRangeFromMinToMax(0, this.screenHeight - height),
        speedX: direction * this.getRangeFromMinToMax(minSpeed, maxSpeed),
        speedY: direction * this.getRangeFromMinToMax(minSpeed, maxSpeed)
      }
      
      item = imageCircle ?
        <Image
          source={imageCircle}
          style={[styles.circle, {...innerStyle}, {...style}]} {...restProps}
        /> : <View
          style={[styles.circle, {...innerStyle}, {...style}]} {...restProps}
        />
      
      circles.push(item)
    }
    
    return circles
  }
  
  render() {
    return <Animated.View style={styles.container}>
      {
        this.circles.map(((item, index) => {
          return (
            <Animated.View key={index}
                           style={[this.state[`position${index}`] && this.state[`position${index}`].getLayout()]}
            >
              {item}
            </Animated.View>
          )
        }))
      }
    </Animated.View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  circle: {
    position: 'absolute'
  },
  circlePosition: {
    position: 'absolute'
  }
})

export default BouncingBalls