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

    this.initItems = this.initItems.bind(this);
  }

  initItems(inputItems, convertDate) {
    let items = inputItems;

    if (this.needToMapProperties()) {
      items = items.map(item => this.doMapping(item)(this.propertyMap))
    }

    /**
     * If date converter is set, convert dates to JS timestamps
     */
    if (convertDate) {
      items = items.map(item => {
        item.date = convertDate(item.date)
        return item
      })
    }

    /**
     * Init items' dateString
     */
    items = items.map(item => {
      item.dateString = this.renderDate(item.date);
      return item;
    })

    /**
     * Sort items in descending order by date
     */
    items = items.sort(this.sortPerDateDesc);

    return items;
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

  renderDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear()
      + ' '
      + date.getHours() + ':' + ("0" + date.getMinutes()).substr(-2);
  }

  sortPerDateDesc = (a, b) => {
    const dateA = parseInt(a.date);
    const dateB = parseInt(b.date);
    if (dateA == dateB) return 0;
    if (dateA < dateB) return 1;
    return -1;
  }

  render() {
    const { style, navigation, convertDate } = this.props;
    const items = this.initItems(this.props.items, convertDate);

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
  map: PropTypes.object,
  convertDate: PropTypes.func,
}