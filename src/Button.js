import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

function Button({ children, onTouch, color }) {
  const backgroundColor = (color === undefined) ? '#e8eaeb' : color;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => { onTouch(children) }}
      style={[styles.button, { backgroundColor }]}>
      <Text style={{ fontSize: 40 }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#bdc1c6',
    marginHorizontal: 2,
    borderRadius: 4,
    borderWidth: .5,
  }
});

export default Button;