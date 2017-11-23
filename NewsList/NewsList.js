import React from 'react'
import { View, Text } from 'react-native'
import { PropTypes } from 'prop-types'
import NewsItem from './NewsItem'

const originalPropertyMap = {
  id: 'id',
  title: 'title',
  summary: 'summary',
  body: 'body',
  image: 'image',
  thumbnail: 'thumbnail',
  date: 'date',
  url: 'url',
  tags: 'tags',
}

export default class NewsList extends React.Component {
  propertyMap = originalPropertyMap

  constructor(props) {
    super(props);
    
    if (props.map) {
      this.propertyMap = this.buildPropertyMap(props.map);
    }
  }

  /**
   * Build new property map based on current property map and newMapValues
   * 
   * @param {any} newMapValues 
   * @returns 
   * @memberof NewsList
   */
  buildPropertyMap(newMapValues) {
    return Object.assign({}, this.propertyMap, newMapValues);
  }

  /**
   * Find out whether property map should be updated
   * 
   * @returns 
   * @memberof NewsList
   */
  needToMapProperties() {
    return this.propertyMap !== originalPropertyMap;
  }

  /**
   * Update item based on property map
   * 
   * @param {any} item 
   * @returns 
   * @memberof NewsList
   */
  doMapping(item) {
    return (map) => {
      const mapKeys = Object.keys(map)
      const newItem = mapKeys.reduce((obj, key) => Object.assign(obj, {[key]: item[map[key]]}), {});
      return newItem
    }
  }

  render() {
    const { style, navigation } = this.props;
    let { items } = this.props;

    if (this.needToMapProperties()) {
      const updatedItems = items.map(item => this.doMapping(item)(this.propertyMap))
      items = updatedItems;
    }

    return (
      <View style={style.NewsList.view}>
        {items.map((item) =>
          <NewsItem
            key={item.id}
            item={item}
            style={style}
            navigation={navigation}
          />)}
      </View>
    )
  }
}

NewsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
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
  navigation: PropTypes.object.isRequired,
  map: PropTypes.object
}