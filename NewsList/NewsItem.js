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
      appConfig: this.props.appConfig
    })
  }

  render() {
    const { item, appConfig } = this.props;

    return (
      <TouchableHighlight onPress={() => this.openNewsItem(item)}>
        <View style={appConfig.NewsList.style.NewsItem.container}>
          {
            item.thumbnail ?
              <View style={appConfig.NewsList.style.NewsItem.imageContainer}>
                <Image
                  source={{uri: item.thumbnail}}
                  style={appConfig.NewsList.style.NewsItem.image}
                  resizeMode="cover"
                />
              </View>
              :
              <View style={appConfig.NewsList.style.NewsItem.imageMissingText}>
                <Text style={{ textAlign: 'center' }}>Ei kuvaa</Text>
              </View>
          }
          <View
            style={appConfig.NewsList.style.NewsItem.textContent}
          >
            {appConfig.NewsList.showDate || appConfig.NewsList.showTime ? 
              <Text style={appConfig.NewsList.style.NewsItem.date}>{item.dateString}</Text>
              : null
            }
            <Text style={appConfig.NewsList.style.NewsItem.title}>{item.title}</Text>
            <Text style={appConfig.NewsList.style.NewsItem.ingress}>{item.summary}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

NewsItem.propTypes = {
  item: PropTypes.object.isRequired,
  appConfig: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}