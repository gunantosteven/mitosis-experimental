import * as React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default function Button(props) {
  return (
    <View style={styles.view1}>
      <Text>BUTTON</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 73,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 50,
    paddingTop: 19,
    paddingBottom: 19,
    paddingRight: 32,
    paddingLeft: 32,
    backgroundColor: 'rgba(82, 77, 193, 1)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 17,
    letterSpacing: 7,
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
  },
});
