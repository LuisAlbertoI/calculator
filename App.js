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
    //funcion para comporar operadores
    const isOperator = (input) => {
      return input === '+' || input === '-' || input === '×' || input === '÷' || input === '%';
    }
    //funcion que nos devulve el resultado de la operacion
    const MathResult = ({ num1, num2, operador }, key) => {
      //convertir los datos de entrada de tipo string en numeros de punto flotante
      const numero1 = Number.parseFloat(num1), numero2 = Number.parseFloat(num2.concat(key));
      //realizando la operacion para devolver el resultado
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
      //elmento final de la cadena de entrada
      const endInput = input.slice(input.length - 1, input.length);
      //funcion para actualizar la entrada y no repetir operadores o concatenar
      const replaceInput = (key) => {
        if (isOperator(endInput)) {
          return input.replace(endInput, key);
        } else {
          return input.concat(key);
        }
      }
      //validar si hay algun resultado para actualizar la formula con el resultado
      if (result.length > 0) {
        this.setState((state) => ({
          input: replaceInput(key),
          formula: { num1: state.result, operador: key, num2: '' },
        }));
      } else {
        //actualizar la formula con la entrada inicial y su operador
        this.setState((state) => ({
          calculation: true,
          input: replaceInput(key),
          formula: { num1: state.input, operador: key, num2: '' },
        }));
      }
    }

    switch (key) {
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
      case '（）':

        break;
      case '±':

        break;
      case 'C':
        this.setState({
          input: '0',
          result: '',
          formula: {},
          calculation: false
        });
        break;
      case '=':
        if (this.state.formula.num2) {
          this.setState((state) => ({
            history: [].concat(...state.history, { formula: state.input, result: state.result }),
            input: state.result,
            calculation: false,
            result: true,
            formula: {},
          }))
        }
        break;
      default:
        if (calculation) {
          //render del resultado
          this.setState((state) => ({
            input: state.input.concat(key),
            result: ''.concat(MathResult(state.formula, key)),
            formula: { ...state.formula, num2: state.formula.num2.concat(key) }
          }));
        } else {
          //validar si ya se hiso alguna calculacion
          if (result) {
            //reiniciar los valores pero mantener el key
            this.setState({ input: key, result: '' });
          } else {
            //evaluar los datos de entrada para concatenar
            if (input === key) {
              //mentener el punto de entrada en 0
              this.setState({ input: key });
            } else if (input === '0') {
              //añadir nuevo punto de entrada
              this.setState({ input: key });
            } else {
              //concatenar al punto de entrda
              this.setState((state) => ({
                input: state.input.concat(key)
              }));
            }
          }
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