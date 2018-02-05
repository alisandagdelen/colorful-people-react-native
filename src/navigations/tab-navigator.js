import React from 'react'

import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';

import { primaryColor } from '../components/globals/colors';
import Home from '../containers/home-container'
import Search from '../containers/search-container'
import Profile from '../containers/profile-container'
import { withMappedNavigationProps } from 'react-navigation-props-mapper'

const ProfileScreen = ({ navigation }) => (
  <ScrollView>
    <Profile navigation={navigation} />
  </ScrollView>
);

const HomeScreen = ({ navigation }) => (
  <ScrollView>
    <Home navigation={navigation} />
  </ScrollView>
);

const SearchScreen = ({ navigation }) => (
  <ScrollView>
    <Search navigation={navigation} />
  </ScrollView>
);

const CustomTabBar = ({ navigation }) => {
  const { routes, index } = navigation.state;
  return (
    <View style={styles.tabContainer}>
      {routes.map((route, routeIndex) => {
        const style = {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 4,
          borderWidth: 0,
          borderColor: '#ddd',
          borderRadius: 1,
          borderBottomColor: primaryColor,
          borderBottomWidth: index === routeIndex ? 2 : 0,
        };

        return (<TouchableOpacity
          onPress={() => navigation.navigate(route.routeName)}
          style={style}
          key={route.routeName}
        >
          <Text style = {styles.tabButton}>{route.routeName}</Text>
        </TouchableOpacity>
      )})}
    </View>
  );
};

const CustomTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForState(navigation.state);

  return (
    <View style={styles.container}>
      <CustomTabBar navigation={navigation} />
      <ActiveScreen
        navigation={addNavigationHelpers({
          ...navigation,
          state: routes[index],
        })}
      />
    </View>
  );
};

const CustomTabRouter = TabRouter(
  {
    Profile: {
      screen: withMappedNavigationProps(ProfileScreen),
      path: 'Profile',
    },
    Chats: {
      screen: withMappedNavigationProps(HomeScreen),
      path: 'Home',
    },
    Search: {
      screen: withMappedNavigationProps(SearchScreen),
      path: 'Search',
    },
  },
  {
    // Change this to start on a different tab
    initialRouteName: 'Profile',
  }
);

const CustomTabs = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView)
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
  },
  tabButton: {
    fontFamily: 'AvenirNext',
    color: primaryColor,
  },
  sampleText: {
    margin: 14,
  },
});

export default CustomTabs;