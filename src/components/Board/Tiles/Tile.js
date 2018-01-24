import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

export default class Tile extends Component {
  render() {
    return (
      <View>
        <Text>Hello, from Tile</Text>
        <Image source={ require('../../../assets/images/board/DirtTexture1.jpg') } />
      </View>
    );
  }
}