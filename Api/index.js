import React from 'react';
import PropTypes from 'prop-types';

class Api {
  constructor(props) {
  }

  static validateResponse = (response, expectResponse = 200) => {
    if (response.status !== expectResponse) {
      throw `Validating response failed. Expected ${expectResponse}, got ${response.status}`
    }

    return true;
  }

  static dataIsExpired = (timestamp, maxAgeInMinutes) => {
    if (!timestamp) {
      return true;
    }

    const now = (new Date()).getTime()
    const difference = Math.abs(now - timestamp) / 1000 / 60;

    return (difference > maxAgeInMinutes)
  }
}

class Me extends Api {
  constructor(meApi) {
    super(meApi);
  }


  /**
   * Get data from Me endpoint
   * 
   * @param {String} meApi URL to me endpoint
   * @param {String} token Access token for accessing me endpoint
   * 
   * @static
   * @memberof Me
   * @returns {Promise}
   */
  static get = (meApi, token) => new Promise((resolve, reject) => {
    const headers = new Headers({
      'Authorization': `Bearer ${token}`
    })

    return fetch(meApi, {
      method: 'GET',
      cache: 'default',
      headers
    }).then(response => {
      // If response is not 200, error is thrown
      Api.validateResponse(response, 200)
      return resolve(response.json())
    }).catch(err => {
      console.log('ERROR:', err)
      reject(`Could not read data from me endpoint: ${err}`)
    })
  })
}

export default {
  Me
}
