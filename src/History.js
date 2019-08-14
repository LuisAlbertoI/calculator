import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Text } from 'react-native';

const data = new Array(20).fill({ formula: '123 * 12', resul: 12000 })

function History({ history, showHistory, clearHistory }) {
  const left = (showHistory === false) ? '-75%' : 0;
  return (
    <View style={[styles.container, { left }]}>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {data.map((item, index) => (
            <View style={styles.item} key={index}>
              <Text style={{ fontSize: 15 }}>{item.formula}</Text>
              <Text style={{ fontSize: 25 }}>= {item.resul}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.button}>
          <TouchableOpacity onPress={clearHistory()}>
            <Text style={{ fontSize: 15 }}>
              CLEAR HISTORY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '75%',
    height: '100%',
    borderRightWidth: .5,
    borderColor: '#bdc1c6',
    backgroundColor: '#e8eaeb',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  button: {
    flex: .2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#bdc1c6',
    borderTopWidth: .5,
  },
  item: {
    paddingVertical: 10,
    marginHorizontal: 15,
    borderBottomWidth: .5,
    borderColor: '#bdc1c6',
    alignItems: 'flex-end',
  },
});

export default History;