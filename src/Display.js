import React from 'react';
import { TouchableOpacity, StyleSheet, Linking, Image, View, Text } from 'react-native';

function Display({ clear, input, result, history, openHistory, toggleHistory }) {
  const gitHub = () => {
    Linking.openURL('https://github.com/LuisAlbertoI');
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.display}>
        <View style={styles.formula}>
          <Text style={{ fontSize: 40 }}>
            {input}
          </Text>
        </View>
        <View style={styles.result}>
          <Text style={{ fontSize: 25, color: '#777777' }}>
            {result}
          </Text>
        </View>
      </View>
      <View style={styles.options}>
        {history.length === 0 ?
          <Text style={{ fontSize: 18, color: '#777777' }}>
            HISTORY
          </Text>
          :
          <TouchableOpacity onPress={() => { openHistory() }}>
            <Text style={{ fontSize: 18 }}>
              {toggleHistory === false ? 'HISTORY' : 'KEYPAD'}
            </Text>
          </TouchableOpacity>
        }
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => { gitHub() }}>
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../assets/github.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { clear() }}>
            <Image source={require('../assets/backspace.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    paddingHorizontal: 5
  },
  options: {
    flex: .3,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#dfe1e5',
    paddingHorizontal: 10,
  },
  buttons: {
    flex: .4,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
  },
  formula: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  result: {
    flex: .5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  }
});

export default Display;