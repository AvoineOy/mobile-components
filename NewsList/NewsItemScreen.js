import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  WebView
} from 'react-native'
import { PropTypes } from 'prop-types'
import HTML from 'react-native-render-html'

class NewsItemScreen extends React.Component {

  _isMounted = false

  constructor(props) {
    super(props);

    const { state } = this.props.navigation;
    const { item, appConfig } = state.params;

    this.item = item;
    this.appConfig = appConfig;
    
    this.state = {
      imgWidth: 0,
      imgHeight: 0,
      newsItem: state.params.newsItem
    }
  }

  componentDidMount() {
    this._isMounted = true  

    /**
     * Resize the main image
     */
    Image.getSize(this.item.image, (width, height) => {
      // calculate image width and height 
      const screenWidth = Dimensions.get('window').width
      const scaleFactor = width / screenWidth
      const imageHeight = height / scaleFactor

      if (this._isMounted) {
        this.setState({imgWidth: screenWidth, imgHeight: imageHeight})
      }
    })
  }

  /**
   * Currently there is no way to cancel Promise, so we need to handle
   * mounting state by hand.
   */
  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    
    const { item, appConfig } = this;

    /**
     * Remove all width|height="[number]" to enable usage of imagesMaxWidth on HTML
     */
    let body = item.body.replace(/ (width|height)="[0-9]+"/g, "")

    return (
      <ScrollView style={appConfig.NewsList.style.NewsItemScreen.container}>
        {
          item.image ?
            <View style={appConfig.NewsList.style.NewsItemScreen.imageContainer}>
              <Image
                source={{uri: item.image}}
                style={Object.assign({}, appConfig.NewsList.style.NewsItemScreen.image, 
                  {
                    width: this.state.imgWidth,
                    height: this.state.imgHeight
                  }
                )}
                resizeMode="cover"
              />
            </View>
            :
            <View style={appConfig.NewsList.style.NewsItemScreen.imageMissingText}>
              <Text style={{ textAlign: 'center' }}>Ei kuvaa</Text>
            </View>
        }
        <Text style={appConfig.NewsList.style.NewsItemScreen.title}>{item.title}</Text>
        <Text style={appConfig.NewsList.style.NewsItemScreen.ingress}>{item.summary}</Text>
        <HTML
          html={`<div class="NewsItemScreen">${body}</div>`}
          tagsStyles={appConfig.NewsList.style.NewsItemScreen.tagsStyles}
          classesStyles={appConfig.NewsList.style.NewsItemScreen.classesStyles}
          containerStyle={appConfig.NewsList.style.NewsItemScreen.body}
          imagesMaxWidth={Dimensions.get("window").width}
        />
      </ScrollView>
    )
  }
}

NewsItemScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        item: PropTypes.object.isRequired,
        appConfig: PropTypes.object.isRequired
      })
    })
  })
}

export default NewsItemScreen