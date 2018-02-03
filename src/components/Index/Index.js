import React, { Component } from 'react';
import { 
  View, 
  Text,
  FlatList, 
  TouchableHighlight
} from 'react-native';

import styles from './index.style';

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

  goToLogin() {
    const navigate = this.props.navigation.navigate;
    navigate('Login', { title: 'Login' });
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
        <TouchableHighlight
          onPress={ this.goToLogin.bind(this) }
        >
        <Text>Go To Login</Text>
        </TouchableHighlight>
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
