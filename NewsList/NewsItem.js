import React from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { PropTypes } from 'prop-types'

export default class NewsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  openNewsItem(item) {
    this.props.navigation.navigate('NewsItem', {
      item: item,
      style: this.props.style
    })
  }

  render() {
    const { item, style } = this.props;

    return (
      <TouchableHighlight onPress={() => this.openNewsItem(item)}>
        <View style={style.NewsList.NewsItem.view}>
          {
            item.thumbnail ?
              <View style={style.NewsList.NewsItem.imageContainer}>
                <Image
                  source={{uri: item.thumbnail}}
                  style={style.NewsList.NewsItem.image}
                  resizeMode="cover"
                />
              </View>
              :
              <View style={style.NewsList.NewsItem.imageMissingText}>
                <Text style={{ textAlign: 'center' }}>Ei kuvaa</Text>
              </View>
          }
          <View
            style={style.NewsList.NewsItem.textContent}
          >
            <Text style={style.NewsList.NewsItem.date}>{item.dateString}</Text>
            <Text style={style.NewsList.NewsItem.title}>{item.title}</Text>
            <Text style={style.NewsList.NewsItem.ingress}>{item.summary}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

NewsItem.propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}