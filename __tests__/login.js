import 'react-native'
import React from 'react'
import Login from '../Login'
import defaultStyles from '../styles'

import renderer from 'react-test-renderer';

/**
 * Test rendering against ./__snapshots__/login.js.snap
 */
test('renders correctly', () => {
  const tree = renderer.create(
    <Login />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});