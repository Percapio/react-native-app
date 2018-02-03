import React, { Component } from 'React';
import { View, Text, TextInput, Button } from 'react-native';

import styles from './login.style';

export default class LoginComponent extends Component {
  static navigationOptions = {
    title: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      handle: '',
      password: '',
    };
  }

  sendLogin() {
    this.props.sendLogin( this.state );
  }

  render() {
    return(
      <View style={ styles.loginComponent }>
        <Text>Email / Handle</Text>
        <TextInput 
          style={ styles.inputContainer }
          onChangeText={ (handle) => this.setState({ handle }) }
          value={ this.state.handle }
        />
        <Text>Password</Text>
        <TextInput 
          style={ styles.inputContainer }
          onChangeText={ (password) => this.setState({ password }) }
          value={ this.state.password }
        />
        <Button
          onPress={ this.sendLogin.bind(this) }
          title={ 'Submit' }>
        </Button>
      </View>
    );
  }
}
