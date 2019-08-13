import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Keyboard from './src/Keyboard';
import Display from './src/Display';
import History from './src/History';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Display />
        </View>
        <View style={{ flex: 1.5 }}>
          <Keyboard />
        </View>
      </View>
    );
  }
}

export default App;