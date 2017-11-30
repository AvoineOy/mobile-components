import { StyleSheet, TextInput } from 'react-native';

let defaultStyles = {

  Button: {
    color: '#036cc7'
  },

  Text: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'normal',    
    lineHeight: 40,
    textAlign: 'left',
    textDecorationLine: 'none',
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

  Login: {
    label: {
      color: '#036cc7',
    },
    input: {},
    button: {
      width: 300
    },
    getCodeButton: {
      buttonStyle: {},
      textStyle: {},
    },
  },

  NewsList: {
    view: {
      paddingTop: 0,
      backgroundColor: "transparent"
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
      imageMissingText: {
        padding: 30,
        textAlign: 'center',
        backgroundColor: 'gray'
      },
      textContent: {
        paddingTop: 10,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white'
      },
      title: {
        paddingTop: 10,
        fontWeight: 'bold',
        backgroundColor: 'white'
      },
      date: {
        color: '#6d6d6d',
        fontSize: 12,
        fontWeight: 'normal',
      },
      ingress: {
        paddingTop: 10,
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
      imageMissingText: {
        padding: 30,
        textAlign: 'center',
        backgroundColor: 'gray'
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
