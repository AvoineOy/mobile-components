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

  initItems(inputItems, convertDate, appConfig) {
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
      item.dateString = this.renderDate(item.date, appConfig);
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

  renderDate = (timestamp, appConfig) => {
    const date = new Date(timestamp);

    let output = appConfig.NewsList.showDate ? date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() : '';
    output += appConfig.NewsList.showTime ? ' ' + date.getHours() + ':' + ("0" + date.getMinutes()).substr(-2) : ''

    return output
  }

  sortPerDateDesc = (a, b) => {
    const dateA = parseInt(a.date);
    const dateB = parseInt(b.date);
    if (dateA == dateB) return 0;
    if (dateA < dateB) return 1;
    return -1;
  }

  render() {
    const { appConfig, convertDate, openNewsItem } = this.props;
    const items = this.initItems(this.props.items, convertDate, appConfig);

    return (
      <View style={appConfig.NewsList.style.NewsList.container}>
        {items.map((item) =>
          <NewsItem
            key={item.id}
            item={item}
            appConfig={appConfig}
            openNewsItem={openNewsItem}
          />)}
      </View>
    )
  }
}

NewsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  appConfig: PropTypes.object.isRequired,
  openNewsItem: PropTypes.func.isRequired,
  map: PropTypes.object,
  convertDate: PropTypes.func,
}