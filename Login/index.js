import React from 'react';
import {
  Text,
  processColor,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';
import PropTypes from 'prop-types';
import AvoineSSOClient from '@avoine/sso-client';
import defaultStyle from '../styles'

/**
 * Component <Login/>
 * 
 * Uses @avoine/sso-client to login to app with Avoine SSO.
 * 
 * Required properties:
 * onLogin: callback on succesfull login,
 * ssoUrl: Url to SSO service (e.g. 'https://example.com'),
 * ssoInstance: SSO instance name (e.g. 'my_instance')
 * 
 * Optional properties:
 * style: Style object
 * 
 * @class Login
 * @extends {React.Component}
 */
class Login extends React.Component {

  /**
   * Creates an instance of Login.
   * 
   * @param {any} props 
   * @memberof Login
   */
  constructor(props) {
    super(props);

    let style = Object.assign({}, defaultStyle, props.style || {});
    this.style = style;

    this.state = {
      phoneNumber: '',
      isLoggingIn: false,
      showUseCode: false,
    };

    this.ssoUrl = props.ssoUrl;
    this.ssoInstance = props.ssoInstance;

    //this.render = this.render.bind(this);
    this.requestCode = this.requestCode.bind(this);
    this.useCode = this.useCode.bind(this);
  }

  componentWillMount() {
    this.ssoClient = new AvoineSSOClient();
  }

  /**
   * Request code from AvoineSSOClient
   * 
   * On success sets state for 'hash'
   * 
   * @param {string} ssoUrl 
   * @param {string} ssoInstance 
   * @memberof Login
   */
  requestCode(ssoUrl, ssoInstance) {
    this.setState({
      isLoggingIn: true
    });
    console.log('Request code for', this.state.phoneNumber, ssoUrl, ssoInstance);

    this.ssoClient.requestCode(ssoUrl, ssoInstance, this.state.phoneNumber)
      .then(hash => {
        this.setState({
          isLoggingIn: false,
          showUseCode: true,
          hash
        });
      })
      .catch(err => {
        this.setState({
          isLoggingIn: false,
          showUseCode: false
        });
        console.error(err);
      });
  }

  /**
   * Try to use code with AvoineSSOClient
   * 
   * On success run callback defined in property onLogin with
   * on parameter, access token received from AvoineSSOClient
   * 
   * @param {string} ssoUrl 
   * @param {string} ssoInstance 
   * @memberof Login
   */
  useCode(ssoUrl, ssoInstance) {
    this.setState({
      isLoggingIn: true
    });

    this.ssoClient.validateCode(ssoUrl, ssoInstance, this.state.code, this.state.hash)
      .then(accessToken => {
        this.setState({
          isLoggingIn: false,
          code: undefined
        });
        this.props.onLogin(accessToken);
      })
      .catch(err => {
        Alert.alert('Virhe', 'Koodia ei voitu vahvistaa. Yritä uudelleen.\n\n' +
          'Huom!\nKoodi on voimassa\nvain 5 minuuttia.');
        this.setState({
          isLoggingIn: false
        });
      });
  }

  /**
   * Render component
   * 
   * Renders view based on state isLoggingIn and if user should be
   * entering identification (e.g. phone number) or code.
   * 
   * @returns 
   * @memberof Login
   */
  render() {
    if (this.state.isLoggingIn) {
      /**
       * If state isLoggingIn is set, show loader
       */
      return (
        <Text
          style={[this.style.Text, this.style.AvoineSSOLogin.Text]}
        >
          Odota hetki, tunnistautuminen käynnissä...
        </Text>
      );
    } else if (this.state.showUseCode) {
      /**
       * If state showUseCode is set, let user enter the code
       */
      return (
        <View>
          <Text
            style={[this.style.Text, this.style.AvoineSSOLogin.Text]}
          >
            Syötä koodi
          </Text>
          <TextInput
            defaultValue={ this.state.code }
            style={ [this.style.TextInput, this.style.AvoineSSOLogin.TextInput] }
            onChangeText={code => this.setState({ code })}
            keyboardType="numeric"
            returnKeyType="go"
            returnKeyLabel="Kirjaudu"
          />
          <Button
            color={this.style.AvoineSSOLogin.Button.color || this.style.Button.color}
            title="Kirjaudu sisään"
            onPress={() => this.useCode(this.ssoUrl, this.ssoInstance)}
          />
        </View>
      );
    }

    /**
     * Initial view: let user input identification (e.g. phone number)
     */
    return (
      <View>
        <Text
          style={[this.style.Text, this.style.AvoineSSOLogin.Text]}
        >
          Syötä puhelinnumerosi
        </Text>
        <TextInput
          style={[this.style.TextInput, this.style.AvoineSSOLogin.TextInput]}
          onChangeText={phoneNumber => this.setState({phoneNumber})}
          defaultValue={this.state.phoneNumber}
          keyboardType="phone-pad"
          returnKeyType="go"
          returnKeyLabel="Jatka"
        />
        <Button
          color={this.style.AvoineSSOLogin.Button.color || this.style.Button.color}
          title="Pyydä koodi"
          onPress={() => this.requestCode(this.ssoUrl, this.ssoInstance)}
        />
      </View>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func,
  ssoUrl: PropTypes.string,
  ssoInstance: PropTypes.string,
  style: PropTypes.object
}

export default Login
