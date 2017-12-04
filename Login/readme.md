
# Mobile Components: Login API

## Usage

`import { Login } from '@avoine/mobile-components'`

or

`import { defaultStyles, Login } from '@avoine/mobile-components'`


## Components

- [`<Login />`](#Login)


## <a name="Login"></a>`<Login />` Component API

### Props

| Prop | Type | Default | Note |
|---|---|---|---|
| `config` | Object | | Configuration object. See description for [config](#config). |
| `style` | Object | | Styles for `<Login />`. See description for [style](#style). |
| `onLogin` | function | | Function provided with `onLogin` will be called on succesfull login. |

#### <a name="config"></a>Property `config`

Configuration object with object `Login`. Object `Login` needs to contain these properties:

| Prop | Type | Description |
|---|---|---|
| `url` | String | Base url for authentication service. E.x. `https://sso.example.com` |
| `instance` | String | Instance name for authentication service. E.x. `my_instance` |

Example:
```
const loginConfig = {
  Login: Login: {
    url: 'https://tunnistus2.avoine.fi',
    instance: 'aaa_santa',
    logo: require('./assets/batman.png'),
    codeText: 'Syötä lepakkonumerosi',
    codePlaceholder: 'Esim. BAT-001',
    codeButtonText: 'TILAA KOODI',
    codeButtonIcon: {
      name: 'arrow-right',
      type: 'material-community',
      size: 20,
      color: secondaryColor
    },
    useText: 'Syötä koodi',
    useButtonText: 'TUNNISTAUDU',
    usePlaceholder: 'Esim. 123456',
    useButtonIcon: {
      name: 'fingerprint',
      type: 'material',
      size: 32,
      color: secondaryColor
    },
    style: {
      outerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0,
        backgroundColor: secondaryColor,
      },
      logo: {
        width: 200,
        height: 100,
      },
      label: {
        fontWeight: 'bold',
        color: mainColor,
        lineHeight: 26,
        textAlign: "center",
        width: 300
      },
      input: {
        height: 70,
        width: 300,
        borderRadius: 10,
        backgroundColor: secondaryColor,
        borderColor: mainColor,
        borderWidth: 1,
        color: mainColor,
      },
      button: {
      },
      buttonContainer: {
        paddingTop: 10
      },
      buttonStyle: {
        backgroundColor: mainColor,
        borderRadius: 10,
        width: 300
      },
      buttonTextStyle: {
        color: secondaryColor
      },
    },
  },
}
```

#### <a name="style"></a>Property `style`

Coming soon. At the moment, please see `styles.js`

### Examples

```
import { defaultStyles, Login } from '@avoine/mobile-components'
import { appConfig } from './appConfig'

...

<Login
  config={appConfig}
  style={defaultStyles}
  onLogin={this.onLoginSuccess}
/>
```
