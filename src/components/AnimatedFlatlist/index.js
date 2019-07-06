import React, { useState } from 'react'
import { Animated, Platform, View } from 'react-native'
import styled from 'styled-components'

import { verticalScale } from '@configs/size'

// import components
import LargeNews from '@components/LargeNews'

// styled components
const FlatList = styled.FlatList``

const AnimatedFlatListComponent = Animated.createAnimatedComponent(FlatList)
const NewsWrapper = React.lazy(() => import('@components/NewsWrapper'))

// set styles for animations and flatList
const height = 510

// components
const AnimatedFlatList = () => {
    const [scrollViewAnimation, setScrollViewAnimation] = useState(
        new Animated.Value(0)
    )

    // animation for ios
    const scrollViewSwipeIos = index => {
        return {
            transform: [
                {
                    // translate item by set pixel(only next and prev items)
                    translateY: scrollViewAnimation.interpolate({
                        inputRange: [
                            (index - 1) * height,
                            index * height,
                            (index + 1) * height,
                        ],
                        outputRange: [0, 0, verticalScale(-40)],
                        extrapolate: 'clamp',
                    }),
                },
                {
                    // scale item by set pixel(only next and prev items)
                    scaleY: scrollViewAnimation.interpolate({
                        inputRange: [
                            (index - 1) * height,
                            index * height,
                            (index + 1) * height,
                        ],
                        outputRange: [1, 1, 0.7],
                    }),
                },
            ],
        }
    }

    const SwipeViewAnimation = index => {
        if (Platform.OS === 'ios') {
            scrollViewSwipeIos(index)
        }
    }

    const renderNews = () => {
        console.log('emma')
        return (
            <NewsWrapper>
                <LargeNews />
            </NewsWrapper>
        )
    }

    return (
        <AnimatedFlatListComponent
            renderItem={renderNews}
            data={[2, 1, 3, 3]}
            pagingEnabled
            vertical={Platform.OS === 'ios' ? true : false}
            horizontal={Platform.OS === 'ios' ? false : true}
            initialPage={0}
            scrollEventThrottle={1}
            onEndReachedThreshold={0.01}
            keyExtractor={(item, index) => index.toString()}
            initialNumToRender={5}
            bounces={false}
            removeClippedSubviews={Platform.OS === 'android' ? true : false}
            getItemLayout={(data, index) => ({
                length: height,
                offset: height * index,
                index,
            })}
            onScroll={Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset:
                                Platform.OS === 'android'
                                    ? { x: SwipeViewAnimation }
                                    : { y: SwipeViewAnimation },
                        },
                    },
                ],
                {
                    useNativeDriver: true,
                }
            )}
        />
    )
}

// check prop types
AnimatedFlatList.propTypes = {}

export default AnimatedFlatList
