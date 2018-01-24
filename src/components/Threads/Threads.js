import React, { Component } from 'react';
import { 
  View, 
  Text,
  FlatList, 
  StyleSheet
} from 'react-native';

export default class ThreadsComponent extends Component {
  constructor() {
    super();

    this.state = {
      threads: [],
    };
  }

  componentDidMount() {
    this.props.getAllThreads()
      .then( payload => this.setState({ threads: payload.threads }) );
  }

  _keyExtractor(item, index){
    return index;
  }

  _renderItem({ item }) {
    // console.log( item );
    return(
      <View style={ styles.listItems }>
        <Text>Title: { item.title }</Text>
      </View>
    );
  }

  render() {
    return(
      <View style={ styles.threadsComponent }>
        <Text style={ styles.threadsHeader }>Hi, from Threads Component</Text>

        <FlatList
          data={ this.state.threads }
          keyExtractor={ this._keyExtractor }
          renderItem={ this._renderItem }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  threadsComponent: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  threadsHeader: {
    padding: 10,
  },

  listItems: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd' 
  }
});