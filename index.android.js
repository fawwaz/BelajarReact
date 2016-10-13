/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

class FixedDimensionBasics extends Component{
  render() {
    return (
      <View>
        <View style={{width:50, height: 50, backgroundColor:'powderblue'}} />
        <View style={{width:100, height: 100, backgroundColor:'skyblue'}} />
        <View style={{width:150, height: 150, backgroundColor:'steelblue'}} />
      </View>
    );
  }
}

class LotsOfStyle extends Component{

  render() {
    return (
      <View>
        <Text style={styles.red}> Just Red Text</Text>
        <Text style={styles.bigblue}>Big blue text </Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state =  {showText:true};

    setInterval(() => {
      this.setState({showText : !this.state.showText });
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>
        {display}
      </Text>
    );
  }
}

class Bananas extends Component {
  render() {
    let pic = {
        uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <Image source={pic} style={{width:193, height:110}} />
    );
  }
}

class belajar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Fawwaz !!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Bananas />
        <Blink text="Tes blinking apps" />
        <LotsOfStyle />
        <FixedDimensionBasics />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red:{
    color: 'red',
  }
});

AppRegistry.registerComponent('belajar', () => belajar);
