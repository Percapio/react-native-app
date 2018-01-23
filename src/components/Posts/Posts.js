import React, { Component } from 'react';
import { 
  View, 
  Text,
  FlatList, 
  StyleSheet
} from 'react-native';

export default class PostsComponent extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.props.getAllPosts()
      .then( payload => this.setState({ posts: payload.posts }) );
  }

  _keyExtractor(item, index){
    return item.id;
  }

  _renderItem({ item }) {
    return(
      <View style={ styles.listItems }>
        <Text>Title: { item.title }</Text>
      </View>
    );
  }

  render() {
    return(
      <View style={ styles.postsComponent }>
        <Text style={ styles.postsHeader }>Hi, from Posts Component</Text>

        <FlatList
          data={ this.state.posts }
          keyExtractor={ this._keyExtractor }
          renderItem={ this._renderItem }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postsComponent: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  postsHeader: {
    padding: 10,
  },

  listItems: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd' 
  }
});