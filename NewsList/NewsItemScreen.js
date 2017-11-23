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

class NewsItemScreen extends React.Component {
  constructor(props) {
    super(props);

    const { state } = this.props.navigation;
    const { newsItem, style } = state.params;

    this.newsItem = newsItem;
    this.style = style;

    this.state = {
      imgWidth: 0,
      imgHeight: 0,
      newsItem: state.params.newsItem
    }
  }

  componentDidMount() {
    Image.getSize(this.newsItem.image, (width, height) => {
      // calculate image width and height 
      const screenWidth = Dimensions.get('window').width
      const scaleFactor = width / screenWidth
      const imageHeight = height / scaleFactor
      this.setState({imgWidth: screenWidth, imgHeight: imageHeight})

      console.log(screenWidth, imageHeight);
    })
  }

  render() {
    
    const { newsItem, style } = this;

    return (
      <ScrollView style={{flex: 1}}>
        <View style={style.NewsList.NewsItemScreen.view}>
          {
            newsItem.image ?
              <View style={style.NewsList.NewsItemScreen.imageContainer}>
                <Image
                  source={{uri: newsItem.image}}
                  style={Object.assign({}, style.NewsList.NewsItemScreen.image, 
                    {
                      width: this.state.imgWidth,
                      height: this.state.imgHeight
                    }
                  )}
                  resizeMode="cover"
                />
              </View>
              :
              <View style={style.NewsList.NewsItemScreen.imageMissingText}>
                <Text style={{ textAlign: 'center' }}>Ei kuvaa</Text>
              </View>
          }
          <Text style={style.NewsList.NewsItemScreen.title}>{newsItem.title}</Text>
          <Text style={style.NewsList.NewsItemScreen.ingress}>{newsItem.summary}</Text>
          <WebView
            style={Object.assign({}, style.NewsList.NewsItemScreen.body, {
              height: 2000
            })}
            scrollEnabled={false}
            source={{
              html: newsItem.body
            }}
          />
        </View>
      </ScrollView>
    )
  }
}

NewsItemScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        newsItem: PropTypes.object.isRequired,
        style: PropTypes.shape({
          NewsList: PropTypes.shape({
            NewsItemScreen: PropTypes.shape({
              view: PropTypes.object,
              imageContainer: PropTypes.object,
              image: PropTypes.object,
              imageMissingText: PropTypes.object,
              ingress: PropTypes.object,
              summary: PropTypes.object,
              body: PropTypes.object,
            })
          })
        })
      })
    })
  })
}

export default NewsItemScreen