import React from 'react';
import {
  Text, processColor, View, TextInput, Button, Alert
} from 'react-native';
import AvoineSSOClient from '@avoine/sso-client';

export default class AvoineSSOLogin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: '',
      isLoggingIn: false,
      showUseCode: false,
    };

    //this.render = this.render.bind(this);
    this.requestCode = this.requestCode.bind(this);
    this.useCode = this.useCode.bind(this);
  }

  requestCode() {
    this.setState({ isLoggingIn: true });
    console.log('Request code for', this.state.phoneNumber);
    this.props.ssoClient
      .requestCode(this.state.phoneNumber)
      .then(hash => {
        this.setState({ isLoggingIn: false, showUseCode: true, hash });
      })
      .catch(err => {
        this.setState({ isLoggingIn: false, showUseCode: false });
        console.error(err);
      })
    ;
  }

  useCode() {
    this.setState({ isLoggingIn: true });

    this.props.ssoClient.validateCode(this.state.code, this.state.hash)
      .then(accessToken => {
        this.setState({ isLoggingIn: false, code: undefined });
        this.props.onLogin(accessToken);
      })
      .catch(err => {
        Alert.alert('Virhe', 'Koodia ei voitu vahvistaa. Yritä uudelleen.\n\n'
        + 'Huom!\nKoodi on voimassa\nvain 5 minuuttia.');
        this.setState({ isLoggingIn: false });
      })
    ;
  }

  render() {
    if (this.state.isLoggingIn) {
      return (
        <Text style={[this.props.style.Text, this.props.style.AvoineSSOLogin.Text]}>Odota hetki, tunnistautuminen käynnissä...</Text>
      );
    } else if (this.state.showUseCode) {
      return (
        <View>
          <Text style={[this.props.style.Text, this.props.style.AvoineSSOLogin.Text]}>Syötä koodi</Text>
          <TextInput
            defaultValue={this.state.code}
            style={[this.props.style.TextInput, this.props.style.AvoineSSOLogin.TextInput]}
            onChangeText={code => this.setState({code})}
            keyboardType="numeric"
            returnKeyType="go"
            returnKeyLabel="Kirjaudu"
          />

        <Button
          color={this.props.style.AvoineSSOLogin.Button.color || this.props.style.Button.color}
          title="Kirjaudu sisään"
          onPress={this.useCode}
        />
        </View>
      );
    }

    return (
      <View>
        <Text style={[this.props.style.Text, this.props.style.AvoineSSOLogin.Text]}>Syötä puhelinnumerosi</Text>
        <TextInput
          style={[this.props.style.TextInput, this.props.style.AvoineSSOLogin.TextInput]}
          onChangeText={phoneNumber => this.setState({phoneNumber})}
          defaultValue={this.state.phoneNumber}
          keyboardType="phone-pad"
          returnKeyType="go"
          returnKeyLabel="Jatka"
        />
        <Button
          color={this.props.style.AvoineSSOLogin.Button.color || this.props.style.Button.color}
          title="Pyydä koodi"
          onPress={this.requestCode}
        />
      </View>
    );
  }
}