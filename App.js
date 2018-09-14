/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import './shim.js';
import Chain3 from 'chain3';

const chain3 = new Chain3(
  new Chain3.providers.HttpProvider('https://www.moacwalletonline.com/test')
);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var rand = crypto.randomBytes(32);

var blockNumber;
var blockInfo;
var me;

type Props = {};
export default class App extends Component<Props> {
  updateBlock() {
    chain3.mc.getBlockNumber(function(e,c){
      console.log(e,c);
      blockNumber = c;
      chain3.mc.getBlock(blockNumber, function(e1,c1) {
        blockInfo = JSON.stringify(c1.difficulty);
        me.forceUpdate();
      })
    });
    setTimeout(me.updateBlock, 2000);
  }

  constructor(props) {
    super(props);
    me = this;
    this.updateBlock();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>Random number</Text>
        <Text>{rand}</Text>
        <Text>Current block number is {blockNumber}</Text>
        <Text>Current difficulty:{blockInfo}</Text>
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
});
