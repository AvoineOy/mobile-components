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
        view: PropTypes.object.isRequired,
        imageContainer: PropTypes.object.isRequired,
        image: PropTypes.object.isRequired,
        imageMissingText: PropTypes.object.isRequired,
        title: PropTypes.object.isRequired,
        ingress: PropTypes.object.isRequired,
      }).isRequired,
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
  navigation: PropTypes.object.isRequired
}