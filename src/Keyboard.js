import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';

function Keyboard({ onTouch }) {
  const colors = ['#dfe1e5', '#B14530', '#4285f4'];
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.row}>
        <Button onTouch={onTouch} color={colors[1]}>C</Button>
        <Button onTouch={onTouch} color={colors[0]}>（）</Button>
        <Button onTouch={onTouch} color={colors[0]}>%</Button>
        <Button onTouch={onTouch} color={colors[0]}>÷</Button>
      </View>
      <View style={styles.row}>
        <Button onTouch={onTouch}>7</Button>
        <Button onTouch={onTouch}>8</Button>
        <Button onTouch={onTouch}>9</Button>
        <Button onTouch={onTouch} color={colors[0]}>×</Button>
      </View>
      <View style={styles.row}>
        <Button onTouch={onTouch}>4</Button>
        <Button onTouch={onTouch}>5</Button>
        <Button onTouch={onTouch}>6</Button>
        <Button onTouch={onTouch} color={colors[0]}>-</Button>
      </View>
      <View style={styles.row}>
        <Button onTouch={onTouch}>1</Button>
        <Button onTouch={onTouch}>2</Button>
        <Button onTouch={onTouch}>3</Button>
        <Button onTouch={onTouch} color={colors[0]}>+</Button>
      </View>
      <View style={styles.row}>
        <Button onTouch={onTouch}>.</Button>
        <Button onTouch={onTouch}>0</Button>
        <Button onTouch={onTouch}>±</Button>
        <Button onTouch={onTouch} color={colors[2]}>=</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 2,
  }
});

export default Keyboard;