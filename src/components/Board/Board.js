import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Tile from './Tiles/Tile';

export default class Board extends Component {
  render() {
    return (
      <View>
        <Tile />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});