import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Keyboard from './src/Keyboard';
import Display from './src/Display';
import History from './src/History';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      formula: [],
      history: [],
      autoResult: false,
      calculation: false,
      showHistory: false,
    }
    this.inKeyboard = this.inKeyboard.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
  }

  inKeyboard(key) {
    switch (key) {
      case '+':
       
        break;
      case '-':
        
        break;
      case '×':
        
        break;
      case '÷':
        
        break;
      case '%':
       
        break;
      case '.':
        
        break;
      case '（）':
        
        break;
      case '±':
        
        break;
      case 'C':
        
        break;
      case '=':
        
        break;
      default:
        this.setState({showHistory: true})
        console.log(key)
    }
  }

  clearHistory(){
    console.log('clear history')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Display />
        </View>
        <View style={{ flex: 1.5 }}>
          <Keyboard onTouch={this.inKeyboard} />
          <History
            history={this.state.history}
            clearHistory={this.clearHistory}
            showHistory={this.state.showHistory}
          />
        </View>
      </View>
    );
  }
}

export default App;