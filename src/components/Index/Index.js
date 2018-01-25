import React, { Component } from 'react';
import { 
  View, 
  Text,
  FlatList, 
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class IndexComponent extends Component {
  static navigationOptions = {
    title: 'Index'
  };

  constructor(props) {
    super(props);

    this.state = {
      forums: [],
    };
  }

  componentDidMount() {
    this.props.getAllForums()
      .then( payload => this.setState({ forums: payload.forums }) );
  }

  keyExtractor(item, index){
    return index;
  }

  goToForum( link ) {
    const navigate = this.props.navigation.navigate;
    navigate('Forum', { title: 'Forum', params: link });
  }

  renderItem({ item }) {
    return(
      <TouchableHighlight
        activeOpacity={ 0.5 }
        underlayColor={ '#cac4c4' }
        style={ styles.listItems }
        onPress={ () => this.goToForum( item.link ) }>

        <Text style={ styles.forumText }>{ item.title } { item.count }</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return(
      <View style={ styles.indexComponent }>
        <Text style={ styles.indexHeader }>Search Component goes here.</Text>
        <FlatList
          data={ this.state.forums }
          keyExtractor={ this.keyExtractor.bind(this) }
          renderItem={ this.renderItem.bind(this) }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indexComponent: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  indexHeader: {
    padding: 10,
  },

  listItems: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd' 
  },

  forumText: {
    color: '#0501ee',
  }
});