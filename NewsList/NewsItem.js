import React from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { PropTypes } from 'prop-types'

export default class NewsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  openNewsItem(newsItem) {
    this.props.navigation.navigate('NewsItem', {
      newsItem: newsItem,
      style: this.props.style
    })
  }

  render() {
    const { newsItem, style } = this.props;

    return (
      <TouchableHighlight onPress={() => this.openNewsItem(newsItem)}>
        <View style={style.NewsList.NewsItem.view}>
          {
            newsItem.image ?
              <View style={style.NewsList.NewsItem.imageContainer}>
                <Image
                  source={{uri: newsItem.image}}
                  style={style.NewsList.NewsItem.image}
                  resizeMode="cover"
                />
              </View>
              :
              <View style={style.NewsList.imageMissingText}>
                <Text style={{ textAlign: 'center' }}>Ei kuvaa</Text>
              </View>
          }
          <Text style={style.NewsList.NewsItem.ingress}>{newsItem.title}</Text>
          <Text style={style.NewsList.NewsItem.summary}>{newsItem.summary}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

NewsItem.propTypes = {
  newsItem: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}