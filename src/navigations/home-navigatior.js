import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from "react-navigation";
import Home from '~/src/containers/home-container';
import Search from '~/src/containers/search-container';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

export default TabNavigator({
  Chats: {
    screen: withMappedNavigationProps(Home),
    navigationOptions: { header: null }
  },
  Search: {
    screen: withMappedNavigationProps(Search),
    navigationOptions: { title: 'Search' }
  }
}, {
  tabBarPosition: 'top'
});

