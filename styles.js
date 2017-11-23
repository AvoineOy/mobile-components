import { StyleSheet, TextInput } from 'react-native';

let defaultStyles = {

  Button: {
    color: '#036cc7'
  },

  Text: {
    color: '#222', // color
    // fontFamily: '', // string
    fontSize: 18, // number
    // fontStyle: '', // enum('normal', 'italic')
    fontWeight: 'normal', // enum('normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
    // font weight. The values 'normal' and 'bold' are supported for most fonts. Not all fonts have a variant for each of the numeric values, in that case the closest one is chosen.
    
    
    lineHeight: 40, // number
    textAlign: 'left', // enum('auto', 'left', 'right', 'center', 'justify')
    // text alignment. The value 'justify' is only supported on iOS and fallbacks to left on Android.
    
    
    textDecorationLine: 'none', // enum('none', 'underline', 'line-through', 'underline line-through')
    // textShadowColor: '', // color
    // textShadowOffset: '', // {width: number, height: number}
    // textShadowRadius: '', // number
    // androidincludeFontPadding: '', // bool
    // to false to remove extra font padding intended to make space for certain ascenders / descenders. With some fonts, this padding can make text look slightly misaligned when centered vertically. For best results also set textAlignVertical to center. Default is true.
    
    
    // androidtextAlignVertical: '', // enum('auto', 'top', 'bottom', 'center')
    // iosfontVariant: '', // [enum('small-caps', 'oldstyle-nums', 'lining-nums', 'tabular-nums', 'proportional-nums')]
    // iosletterSpacing: '', // number
    // iostextDecorationColor: '', // color
    // iostextDecorationStyle: '', // enum('solid', 'double', 'dotted', 'dashed')
    // ioswritingDirection: '', // enum('auto', 'ltr', 'rtl')
  },
  
  TextInput: {
    textAlign: "center",
    backgroundColor: "#fff",
    height: 40,
    width: 300,
    fontSize: 18,
  },

  View: {
    flex: 1,
    flexDirection: 'flex-start',
    backgroundColor: 'lightblue',
    padding: 20,
    alignItems: 'center'
  },

  AvoineSSOLogin: {
    Button: {
      color: '#036cc7',
    },
    TextInput: {
      width: 300
    }
  },

  NewsList: {
    view: {
      paddingTop: 20,
      backgroundColor: "#0fa"
    },

    image: {
      flex: 1,
      width: null,
      height: null,
      maxWidth: 500,
      backgroundColor: 'lightgray',
      paddingBottom: 2
    },

    imageMissingText: {
      padding: 30,
      textAlign: 'center',
      backgroundColor: 'gray'
    },

    NewsItem: {
      view: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 0,
        backgroundColor: "lightgray"
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
      ingress: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: 'bold',
        backgroundColor: 'white'
      },
      summary: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40,
        backgroundColor: 'white'
      }
    },

    NewsItemScreen: {
      view: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 0,
        backgroundColor: "lightgray"
      },
      imageContainer: {
        backgroundColor: 'transparent',
        paddingBottom: 2
      },
      image: {
        flex: 1,
        minHeight: 10,
        width: null,
        height: null,
        maxWidth: 500
      },
      title: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: 'bold',
        backgroundColor: 'white',
        fontSize: 20
      },
      ingress: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        fontSize: 16,
        fontWeight: "bold"
      },
      body: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40,
        backgroundColor: 'white'
      }
    }
  }
};

export default defaultStyles;
