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

  //funcion que nos devulve el resultado de la operacion
  MathResult({ num1, num2, operador }, key) {
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
  //entrada del teclado y logica
  inKeyboard(key) {
    const { input, result, calculation } = this.state;
    //funcion para comporar operadores
    const isOperator = (input) => {
      return input === '+' || input === '-' || input === '×' || input === '÷' || input === '%';
    }
    //funcion para actualizar el estado y generar una formula
    const updateState = (key) => {
      //elmento final de la cadena de entrada
      const endInput = input.slice(input.length - 1, input.length);
      //funcion para actualizar la entrada y no repetir operadores o concatenar
      const replaceInput = (key) => {
        if (isOperator(endInput)) {
          //error al utilizar replece modifica los demas operadores
          // return input.replace(endInput, key);
          return input.slice(0, input.length - 1).concat(key);
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
    //casos de entrada del teclado
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
      case '.':
        if (calculation && input.slice(input.length - 1, input.length) !== '.') {
          this.setState((state) => ({
            input: state.formula.num2 === '' ? input.concat('0.') : input.concat('.'),
            formula: { ...state.formula, num2: state.formula.num2 === '' ? '0.' : state.formula.num2.concat('.') }
          }));
        } else if (input.slice(input.length - 1, input.length) !== '.') {
          this.setState({
            input: input === '0' ? '0.' : input.concat('.')
          });
        }
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
            result: ''.concat(this.MathResult(state.formula, key)),
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
    const { input, formula, calculation } = this.state;
    if (calculation && formula.num2.length > 0) {
      //creamos una nueva cadena para nuestra formula y para recalcular
      const newNum2 = formula.num2.slice(0, formula.num2.length - 1);
      //eiminamos los datos de la formula num2
      this.setState((state) => ({
        input: input.slice(0, input.length - 1),
        formula: { ...state.formula, num2: newNum2 },
        result: formula.num2.length > 1 && this.MathResult({ ...state.formula, num2: newNum2 }, ''),
      }));
    } else if (formula.operador) {
      //eliminamos el operador y regrezamos al estado inicial

      this.setState((state) => ({
        calculation: false,
        input: input.slice(0, input.length - 1),
        formula: { ...state.formula, operador: '' },
      }));
    } else if (input !== '0') {
      //punto inicial de nuestra entrada de datos
      const initInput = (input.length === 1) ? '0' : input.slice(0, input.length - 1);
      //eliminar los datos primarios de la entrada y lo mantenemos en 0
      this.setState((state) => ({
        input: initInput,
        formula: { ...state.formula, num1: initInput },
      }))
    }
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