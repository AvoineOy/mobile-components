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
  }
};

export default defaultStyles;
