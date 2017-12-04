
# Mobile Components: Config API

## Usage

`import { buildConfig } from '@avoine/mobile-components'`


## <a name="buildConfig"></a>`function buildConfig([settings])`

### Return value

`buildConfig()` returns default configuration for `@avoine/mobile-components`.

#### Parameter `settings``

| Prop | Type | Description | Default value |
|---|---|---|---|
| storage | String | When storing data to AsyncStorage, `storage` is used to prepend the key name. | '@appStorage' |
| mainColor | String | Primary color for the app | '#222' |
| inactiveMainColor | String | Inactive primary color | '#666' |
| secondaryColor | String | Secondary color | '#fff' |
| inactiveSecondaryColor | String | Inactive secondary color | '#ccc' |
| hilightColor | String | Color to be used on hilights | '#ca005d' |
| inactiveHilightColor | String | Inactive hilights | '#dd92b5' |
| statusBarHidden | Bool | Should statusbar be hidden | false |
| statusBarBackgroundColor | String | Status bar's background color. | `secondaryColor` |
| statusBarStyle | String | Possible values: 'default', 'light-content', 'dark-content'. | 'default' |
| config | String | Custom configuration to be merged with default configuration with `lodash.merge()`. | {} |

### Default values

```
{
  storage: storage,

  mainColor,
  secondaryColor,
  hilightColor,
  inactiveMainColor,
  inactiveSecondaryColor,

  statusBarHidden,
  statusBarBackgroundColor,
  statusBarStyle,

  /**
    * Login
  */
  Login: {
    url: 'https://tunnistus2.avoine.fi',
    instance: 'aaa_santa',
    logo: require('./assets/avoine-icon.png'),
    codeText: 'Syötä tunnuksesi',
    codePlaceholder: 'Esim. ABCD1234',
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
        width: 150,
        height: 150,
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
        borderColor: hilightColor,
        borderWidth: 1,
        color: mainColor,
        textAlign: 'center',
        fontSize: 30,
      },
      button: {
      },
      buttonContainer: {
        paddingTop: 10
      },
      buttonStyle: {
        backgroundColor: hilightColor,
        borderRadius: 10,
        width: 300
      },
      buttonTextStyle: {
        color: secondaryColor
      },
    },
  },

  NewsList: {
    source: 'https://blog.avoine.fi/mobilefeed/',
    showDate: true,
    showTime: false,
    style: {
      NewsList: {
        container: {},
      },
      NewsItem: {
        container: {
          flex: 1,
          paddingTop: 5,
          paddingBottom: 0,
          backgroundColor: inactiveSecondaryColor
        },
        imageContainer: {
          backgroundColor: 'transparent',
          paddingBottom: 2
        },
        image: {
          flex: 1,
          minHeight: 200,
          width: null,
          height: null,
          maxWidth: 500
        },
        imageMissingText: {
          padding: 30,
          backgroundColor: 'transparent'
        },
        textContent: {
          paddingTop: 10,
          paddingBottom: 15,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: secondaryColor
        },
        title: {
          paddingTop: 10,
          fontWeight: 'bold',
          color: mainColor,
          backgroundColor: secondaryColor
        },
        date: {
          color: inactiveMainColor,
          fontSize: 12,
          fontWeight: 'normal',
        },
        ingress: {
          paddingTop: 10,
          backgroundColor: secondaryColor,
          color: mainColor
        }
      },
      NewsItemScreen: {
        container: {
          flex: 1,
          paddingTop: 5,
          paddingBottom: 0,
          backgroundColor: inactiveSecondaryColor,
        },
        imageContainer: {
          backgroundColor: 'transparent',
          paddingBottom: 2,
        },
        image: {
          flex: 1,
          minHeight: 10,
          width: null,
          height: null,
          maxWidth: 500,
        },
        imageMissingText: {
          padding: 30,
          backgroundColor: secondaryColor,
        },
        title: {
          paddingTop: 10,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 20,
          fontWeight: 'bold',
          color: mainColor,
          backgroundColor: secondaryColor,
        },
        ingress: {
          paddingTop: 10,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 20,
          fontSize: 16,
          fontWeight: "bold",
          color: mainColor,
          backgroundColor: secondaryColor,
        },
        body: {
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 40,
          backgroundColor: secondaryColor,
        },
        tagsStyles: {
          p: {
            color: mainColor,
            paddingBottom: 20
          }
        },
        classesStyles: {
          'NewsItemScreen': {
            backgroundColor: secondaryColor
          }
        }
      }
    }
  },

  style: {

    mainContainer: {
      flex: 1,
      backgroundColor: secondaryColor,
      padding: 20,
    },
    
    view: {
      
    },
    
    text: {
      color: mainColor,
    },

    textInput: {
      textAlign: 'center'
    },

    navigation: {
      headerStyle: {
        backgroundColor: hilightColor,
        borderBottomColor: inactiveMainColor
      },
      headerTitleStyle: {
        color: secondaryColor,
      },
      headerTintColor: secondaryColor,
      headerBackTitleStyle: {
        color: secondaryColor,
      },
      headerLeft: {
        outerContainer: {
          paddingLeft: 7
        },
        innerContainer: {
          width: 30,
          height: 30,
          borderRadius: 15,
          paddingLeft: 6,
          paddingTop: 5,
          backgroundColor: hilightColor,
        }
      },
      headerRight: {
        outerContainer: {
          paddingRight: 5,
          paddingTop: 5,
        },
        innerContainer: {}
      },
      tabBarOptions: {
        activeTintColor: secondaryColor,
        inactiveTintColor: inactiveSecondaryColor,
        showLabel: true,
        style: {
          backgroundColor: hilightColor,
          borderTopColor: inactiveMainColor,
        }
      }
    },
  },
}
```


### Examples

```
import { buildConfig } from '@avoine/mobile-components'

const mainColor = '#222';
const inactiveMainColor = '#666';

const secondaryColor = '#fff';
const inactiveSecondaryColor = '#ccc';

const hilightColor = '#ca005d';
const inactiveHilightColor = '#dd92b5'

const config = buildConfig(
  {
    storage: '@fi.avoine.sampleapp',
    mainColor,
    inactiveSecondaryColor,
    secondaryColor,
    inactiveSecondaryColor,
    hilightColor,
    inactiveHilightColor,
    statusBarHidden: false,
    statusBarStyle: 'light-content'
  }
)

config.NewsList.source = 'https://blog.avoine.fi/mobilefeed/'

export default config
```
