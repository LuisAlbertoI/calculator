import React, { Component } from 'react';
import { View } from 'react-native';
import Keyboard from './src/Keyboard';
import Display from './src/Display';
import History from './src/History';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      result: '',
      formula: [],
      history: new Array(20).fill({ formula: '125+5', result: 130 }),
      calculation: false,
      showHistory: false,
    }
    this.clear = this.clear.bind(this);
    this.inKeyboard = this.inKeyboard.bind(this);
    this.openHistory = this.openHistory.bind(this);
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
        console.log(key)
    }
  }

  clear() {
    console.log('borrar')
  }

  openHistory() {
    this.setState((state) => ({
      showHistory: !state.showHistory
    }));
  }

  clearHistory() {
    this.setState({
      history: [],
      showHistory: false
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Display
            clear={this.clear}
            input={this.state.input}
            result={this.state.result}
            history={this.state.history}
            openHistory={this.openHistory}
            toggleHistory={this.state.showHistory}
          />
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