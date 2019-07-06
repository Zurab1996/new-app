import React from 'react'
import { Animated, Platform } from 'react-native'
import styled from 'styled-components'

import { verticalScale } from '@configs/size'

// import components
import LargeNews from '@components/LargeNews'

// styled components
const FlatList = styled.FlatList``

const AnimatedFlatListComponent = Animated.createAnimatedComponent(FlatList)
const NewsWrapper = React.lazy(() => import('@components/NewsWrapper'))

const newsContainerHeight = 520
// components
const AnimatedFlatList = () => {
    const scrollViewAnimation = new Animated.Value(0)

    // animation for ios
    const scrollViewSwipeIos = index => {
        return {
            transform: [
                {
                    // translate item by set pixel(only next and prev items)
                    translateY: scrollViewAnimation.interpolate({
                        inputRange: [
                            (index - 1) * verticalScale(newsContainerHeight),
                            index * verticalScale(newsContainerHeight),
                            (index + 1) * verticalScale(newsContainerHeight),
                        ],
                        outputRange: [0, 0, verticalScale(-60)],
                    }),
                },
                {
                    // scale item by set pixel(only next and prev items)
                    rotateY: scrollViewAnimation.interpolate({
                        inputRange: [
                            (index - 1) * verticalScale(newsContainerHeight),
                            index * verticalScale(newsContainerHeight),
                            (index + 1) * verticalScale(newsContainerHeight),
                        ],
                        outputRange: ['0deg', '0deg', '70deg'],
                    }),
                },
            ],
        }
    }

    const SwipeViewAnimation = index => {
        if (Platform.OS === 'ios') {
            return scrollViewSwipeIos(index)
        }
    }

    // eslint-disable-next-line react/prop-types
    const renderNews = ({ item, index }) => {
        return (
            <Animated.View style={[SwipeViewAnimation(Number(index))]}>
                <NewsWrapper>
                    <LargeNews />
                </NewsWrapper>
            </Animated.View>
        )
    }

    return (
        <AnimatedFlatListComponent
            renderItem={renderNews}
            data={[2, 1, 3, 4, 5, 8, 9, 7, 0]}
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
                length: newsContainerHeight,
                offset: newsContainerHeight * index,
                index,
            })}
            onScroll={Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset: { y: scrollViewAnimation },
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
