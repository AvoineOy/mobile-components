
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
  Login: {
    url: 'https://sso.example.com',
    instance: 'my_instance'
  }
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
