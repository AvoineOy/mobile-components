import React from 'react';
import {
  Text,
  processColor,
  View,
  TextInput,
  Alert,
  Image,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import AvoineSSOClient from '@avoine/sso-client';
import { Button } from 'react-native-elements'

/**
 * Component <Login/>
 * 
 * Uses @avoine/sso-client to login to app with Avoine SSO.
 * 
 * Required properties:
 * onLogin: callback on succesfull login,
 * config: { Login: { url: Url to SSO service (e.g. 'https://example.com'),instance: SSO instance name (e.g. 'my_instance') }} 
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

    this.state = {
      phoneNumber: '',
      isLoggingIn: false,
      showUseCode: false,
    };

    this.config = props.config;
    this.ssoUrl = props.config.Login.url || undefined;
    this.ssoInstance = props.config.Login.instance || undefined;
    
    this.requestCode = this.requestCode.bind(this);
    this.useCode = this.useCode.bind(this);
    this.renderLogo = this.renderLogo.bind(this);
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
        console.log(err)
        Alert.alert('Virhe', 'Koodia ei voitu vahvistaa. Yritä uudelleen.\n\n' +
          'Huom!\nKoodi on voimassa\nvain 5 minuuttia.');
        this.setState({
          isLoggingIn: false
        });
      });
  }

  renderLogo() {

    if (this.config.Login.logo) {
      return (
        <Image
          source={this.config.Login.logo}
          style={this.config.Login.style.logo}
          resizeMode='contain'
        />
      );
    }
    
    return null;
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
        <View style={this.config.Login.style.outerContainer}>
          
          {this.renderLogo()}
          
          <View style={{paddingTop: 20}}>
            <ActivityIndicator
              size="large"
              color="gray"
            />
          </View>
        </View>
      );
    } else if (this.state.showUseCode) {
      /**
       * If state showUseCode is set, let user enter the code
       */
      return (
        <View style={this.config.Login.style.outerContainer}>

          {this.renderLogo()}

          <Text style={this.config.Login.style.label}>
            {this.config.Login.useText || 'Syötä koodi'}
          </Text>
          <TextInput
            defaultValue={this.state.code}
            style={this.config.Login.style.input}
            placeholder={this.config.Login.usePlaceholder}
            placeholderTextColor={this.config.inactiveMainColor}
            onChangeText={code => this.setState({ code })}
            keyboardType="numeric"
            returnKeyType="go"
            returnKeyLabel="Tunnistaudu"
          />
          <View style={this.config.Login.style.buttonContainer}>
            <Button
              buttonStyle={this.config.Login.style.buttonStyle}
              textStyle={this.config.Login.style.buttonTextStyle}
              title={this.config.Login.useButtonText || "TUNNISTAUDU"}
              rightIcon={this.config.Login.useButtonIcon}
              onPress={() => this.useCode(this.ssoUrl, this.ssoInstance)}
            />
          </View>
        </View>
      );
    }

    /**
     * Initial view: let user input identification (e.g. phone number)
     */
    return (
      <View style={this.config.Login.style.outerContainer}>
        
        {this.renderLogo()}
          
        <Text style={this.config.Login.style.label}>
          {this.config.Login.codeText || 'Syötä puhelinnumerosi tai sähköpostiosoitteesi'}
        </Text>
        <TextInput
          style={this.config.Login.style.input}
          placeholder={this.config.Login.codePlaceholder}
          placeholderTextColor={this.config.inactiveMainColor}
          onChangeText={phoneNumber => this.setState({phoneNumber})}
          defaultValue={this.state.phoneNumber}
          keyboardType="default"
          returnKeyType="go"
          returnKeyLabel="Jatka"
        />
        <View style={this.config.Login.style.buttonContainer}>
          <Button
            buttonStyle={this.config.Login.style.buttonStyle}
            textStyle={this.config.Login.style.buttonTextStyle}
            title={this.config.Login.codeButtonText}
            rightIcon={this.config.Login.codeButtonIcon}
            onPress={() => this.requestCode(this.ssoUrl, this.ssoInstance)}
          />
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func,
  config: PropTypes.shape({
    Login: PropTypes.shape({
      url: PropTypes.string.isRequired,
      instance: PropTypes.string.isRequired
    })
  }),
  style: PropTypes.object
}

export default Login
