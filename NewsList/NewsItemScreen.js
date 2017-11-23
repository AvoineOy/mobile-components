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
    const { item, style } = state.params;

    this.item = item;
    this.style = style;

    this.state = {
      imgWidth: 0,
      imgHeight: 0,
      newsItem: state.params.newsItem
    }
  }

  componentDidMount() {
    Image.getSize(this.item.image, (width, height) => {
      // calculate image width and height 
      const screenWidth = Dimensions.get('window').width
      const scaleFactor = width / screenWidth
      const imageHeight = height / scaleFactor
      this.setState({imgWidth: screenWidth, imgHeight: imageHeight})

      console.log(screenWidth, imageHeight);
    })
  }

  render() {
    
    const { item, style } = this;

    return (
      <ScrollView style={{flex: 1}}>
        <View style={style.NewsList.NewsItemScreen.view}>
          {
            item.image ?
              <View style={style.NewsList.NewsItemScreen.imageContainer}>
                <Image
                  source={{uri: item.image}}
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
          <Text style={style.NewsList.NewsItemScreen.title}>{item.title}</Text>
          <Text style={style.NewsList.NewsItemScreen.ingress}>{item.summary}</Text>
          <WebView
            style={Object.assign({}, style.NewsList.NewsItemScreen.body, {
              height: 2000
            })}
            scrollEnabled={false}
            source={{
              html: item.body
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
        item: PropTypes.object.isRequired,
        style: PropTypes.shape({
          NewsList: PropTypes.shape({
            NewsItemScreen: PropTypes.shape({
              view: PropTypes.object.isRequired,
              imageContainer: PropTypes.object.isRequired,
              image: PropTypes.object.isRequired,
              imageMissingText: PropTypes.object.isRequired,
              title: PropTypes.object.isRequired,
              ingress: PropTypes.object.isRequired,
              body: PropTypes.object.isRequired,
            }).isRequired
          })
        }).isRequired,
      })
    })
  })
}

export default NewsItemScreen