import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Animated } from 'react-native';

import styles from '../styles/SplashStyles';

class SplashScreen extends Component {
  state = {
    logoOpacity: new Animated.Value(0),
    bgOpacity: new Animated.Value(0),
    loadingWidth: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(this.state.bgOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(this.state.loadingWidth, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
      })
    ]).start(() => {
      this.props.navigation.replace('HomeScreen');
    });
  }

  render() {
    const logoScale = this.state.logoOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0.8, 1]
    });

    const loadingWidth = this.state.loadingWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%']
    });

    return (
      <View style={styles.container}>
        <Animated.Image source={require('../../assets/images/splash_bg.jpg')} style={[styles.background, {opacity: this.state.bgOpacity}]} resizeMode="cover" />
        <Animated.View style={[styles.logoContainer, {opacity: this.state.logoOpacity, transform: [{scale: logoScale}]}]}>
          <Animated.Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
        </Animated.View>
        <View style={styles.loadingContainer}>
          <Animated.View style={[styles.loadingBar, {width: loadingWidth}]} />
        </View>
      </View>
    );
  }
}

export default SplashScreen;
