import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Linking, Image, View, Text } from 'react-native';

class Display extends Component {
  gitHub() {
    Linking.openURL('https://github.com/LuisAlbertoI');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.display}>
          <View style={styles.formula}>
            <Text style={{ fontSize: 40 }}>
              10000000000
            </Text>
          </View>
          <View style={styles.result}>
            <Text style={{ fontSize: 25, color: '#777777' }}>
              12000
            </Text>
          </View>
        </View>
        <View style={styles.options}>
          <TouchableOpacity>
            <Text style={{ fontSize: 18 }}>
              HISTORY
            </Text>
          </TouchableOpacity>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={this.gitHub}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require('../assets/github.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/backspace.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
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