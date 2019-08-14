/* eslint-disable react/prop-types */
import React from 'react'
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation'
import styled from 'styled-components'

import { scale, verticalScale } from '@configs/size'
import { ifIphoneX } from '@configs/iphoneXHelper'
import AppStyles from '@configs/styles'

// components
import Icon from '@components/CustomIcon'

// screens
import TopNews from '@topNews'
import News from '@news'
import NewsFeed from '@newsFeed'
import Profile from '@profile'
import IndividualNews from '@individualNews'

const tabBarOptions = {
    style: {
        borderRadius: 50,

        position: 'absolute',
        left: scale(10),
        right: scale(10),
        bottom: verticalScale(10),
        height: verticalScale(60),
        backgroundColor: AppStyles.color.COLOR_DARK_BLUE,
        ...ifIphoneX({
            marginBottom: 14,
        }),
        // inner item of tab bar
        justifyContent: 'center',
        alignItems: 'center',

        // inner item padding of tab bar
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(7),
    },

    activeTintColor: AppStyles.color.COLOR_PINK,
    inactiveTintColor: AppStyles.color.COLOR_LIGHT_PINK,
    tabStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    safeAreaInset: {
        bottom: 'never',
    },
}

const TabBarLabel = styled.Text`
    color: ${({ color }) => color};
    font-size: ${scale(9)}px;
`
const TopNewsNavigation = createStackNavigator({
    Home: TopNews,
    IndividualNews,
})

const NewsNavigator = createStackNavigator({
    Home: News,
    IndividualNews,
})

TopNewsNavigation.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}
NewsNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

const TabNavigator = createBottomTabNavigator(
    {
        TopNewsScreen: {
            screen: TopNewsNavigation,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="top-news" size={scale(25)} color={tintColor} />
                ),
                tabBarLabel: ({ tintColor }) => (
                    <TabBarLabel color={tintColor}>Top News</TabBarLabel>
                ),
            },
        },
        NewsScreen: {
            screen: NewsNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="news" size={scale(20)} color={tintColor} />
                ),
                tabBarLabel: ({ tintColor }) => (
                    <TabBarLabel color={tintColor}>News</TabBarLabel>
                ),
            },
        },
        NewsFeedScreen: {
            screen: NewsFeed,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="news-feed" size={scale(20)} color={tintColor} />
                ),
                tabBarLabel: ({ tintColor }) => (
                    <TabBarLabel color={tintColor}>Feed</TabBarLabel>
                ),
            },
        },
        ProfileScreen: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="profile" size={scale(20)} color={tintColor} />
                ),
                tabBarLabel: ({ tintColor }) => (
                    <TabBarLabel color={tintColor}>Profile</TabBarLabel>
                ),
                tabBarVisible: false,
            },
        },
    },
    {
        initialRouteName: 'NewsScreen',
        tabBarOptions: {
            ...tabBarOptions,
        },

        tabBarPosition: 'bottom',
        swipeEnabled: false,
    }
)

export default createAppContainer(TabNavigator)
