import React from 'react'
import { TabNavigator } from 'react-navigation'
import Home from '../containers/home-container'
import Search from '../containers/search-container'
import Profile from '../containers/profile-container'
import { withMappedNavigationProps } from 'react-navigation-props-mapper'
import { primaryColor } from '../components/globals/colors'

export default TabNavigator({
  Profile: {
    screen: withMappedNavigationProps(Profile),
    navigationOptions: { title: 'Profile' }
  },
  Chats: {
    screen: withMappedNavigationProps(Home),
    navigationOptions: { header: null }
  },
  Search: {
    screen: withMappedNavigationProps(Search),
    navigationOptions: { title: 'Search' }
  },
}, {
  tabBarPosition: 'top',
  tabBarOptions: {
    labelStyle: {
      fontSize: 16,
    },
    activeTintColor : '#fff',
    style: {
      backgroundColor: primaryColor,
    }
  }
})

