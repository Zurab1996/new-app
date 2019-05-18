import React from 'react'
import { View } from 'react-native'

import LargeNews from '@components/LargeNews'
import AppBackground from '@components/AppBackground'
import { ifIphoneX } from '@configs/iphoneXHelper'

const TopNews = () => {
    return (
        <View>
            <AppBackground />
            <LargeNews />
        </View>
    )
}

TopNews.navigationOptions = {
    title: 'Home',
    headerStyle: {
        backgroundColor: '#f4511e',
        ...ifIphoneX(
            {
                height: 40,
            },
            {
                height: 45,
            },
            {
                height: 65,
            }
        ),
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

export default TopNews
