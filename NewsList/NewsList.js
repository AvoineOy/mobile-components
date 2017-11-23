import React from 'react'
import { View, Text } from 'react-native'
import { PropTypes } from 'prop-types'
import NewsItem from './NewsItem'

export default class NewsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { newsItems, style, navigation } = this.props;

    return (
      <View style={style.NewsList.view}>
        {newsItems.map((newsItem) =>
          <NewsItem
            key={newsItem.id}
            newsItem={newsItem}
            style={style}
            navigation={navigation}
          />)}
      </View>
    )
  }
}

NewsList.propTypes = {
  newsItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.shape({
    NewsList: PropTypes.shape({
      NewsItem: PropTypes.shape({
        view: PropTypes.object,
        imageContainer: PropTypes.object,
        image: PropTypes.object,
        imageMissingText: PropTypes.object,
        ingress: PropTypes.object,
        summary: PropTypes.object,
      }),
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
  }),
  navigation: PropTypes.object
}