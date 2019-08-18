import React, { Component } from 'react';
import { View } from 'react-native';
import Keyboard from './src/Keyboard';
import Display from './src/Display';
import History from './src/History';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      result: '',
      formula: {},
      history: [],
      calculation: false,
      showHistory: false,
    }
    this.inKeyboard = this.inKeyboard.bind(this);
    this.openHistory = this.openHistory.bind(this);
    this.deleteNumber = this.deleteNumber.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
  }

  inKeyboard(key) {
    const { input, result, calculation } = this.state;

    const MathResult = ({ num1, num2, operador }, key) => {

      const numero1 = parseInt(num1), numero2 = parseInt(num2.concat(key));

      switch (operador) {
        case '+':
          return numero1 + numero2;
          break;
        case '-':
          return numero1 - numero2;
          break;
        case '×':
          return numero1 * numero2;
          break;
        case '÷':
          return numero1 / numero2;
          break;
        case '%':
          return numero1 % numero2;
          break;
      }
    }

    const updateState = (key) => {
      //validar si el operador ya esta añadido para no repetirlo
      if (input.slice(input.length - 1, input.length) !== key) {
        //validar si ya tenemos un resultado para actualizar la formula con el resultado
        if (result.length > 0) {
          this.setState((state) => ({
            input: state.input.concat(key),
            formula: { num1: state.result, operador: key, num2: '' }
          }));
        } else {
          //actualizar la formula con la entrada inicial y su operador
          this.setState((state) => ({
            calculation: true,
            input: state.input.concat(key),
            formula: { num1: state.input, operador: key, num2: '' }
          }));

          console.log(input.replace('1', 'luis'))
      }
    }
  }

  switch(key) {
      case '+':
    updateState(key)
    break;
      case '-':
    updateState(key)
    break;
      case '×':
    updateState(key)
    break;
      case '÷':
    updateState(key)
    break;
      case '%':
    updateState(key)
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
    if (calculation) {
      //hacer render del resultado
      this.setState((state) => ({
        input: state.input.concat(key),
        result: ''.concat(MathResult(state.formula, key)),
        formula: { ...state.formula, num2: state.formula.num2.concat(key) }
      }));
    } else if (input === key) {
      //mentener el punto de entrada en 0
      this.setState({
        input: key
      });
    } else if (input === '0') {
      //añadir nuevo punto de entrada
      this.setState({
        input: key
      });
    } else {
  //concatenar al punto de entrda
  this.setState((state) => ({
    input: state.input.concat(key)
  }));
}
    }
  }

openHistory() {
  this.setState((state) => ({
    showHistory: !state.showHistory
  }));
}

deleteNumber() {
  console.log('borrar')
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
          input={this.state.input}
          result={this.state.result}
          history={this.state.history}
          openHistory={this.openHistory}
          deleteNumber={this.deleteNumber}
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