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
        {newsItems.map((newsItem, index) =>
          <NewsItem
            key={index}
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
  style: PropTypes.object.isRequired,
  navigation: PropTypes.object
}