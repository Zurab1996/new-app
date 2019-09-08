import React from 'react'
import { Animated, Platform } from 'react-native'
import styled from 'styled-components'

import { verticalScale, newsWrapperContainerHeight } from '@configs/size'

// import components
// const LargeNews = React.lazy(() => import('@components/News/Large'))
// const BigNewsWrapper = React.lazy(() =>
//     import('@components/News/Wrappers/BigNews')
// )
const BigSmallNewsWrapper = React.lazy(() =>
    import('@components/News/Wrappers/BigSmallNews')
)
const NewsWrapper = React.lazy(() => import('@components/News/Wrappers/News'))

// styled components
const FlatList = styled.FlatList``

const AnimatedFlatListComponent = Animated.createAnimatedComponent(FlatList)

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
                            (index - 1) *
                                verticalScale(newsWrapperContainerHeight),
                            index * verticalScale(newsWrapperContainerHeight),
                            (index + 1) *
                                verticalScale(newsWrapperContainerHeight),
                        ],
                        outputRange: [0, 0, verticalScale(-60)],
                    }),
                },
                {
                    // scale item by set pixel(only next and prev items)
                    rotateY: scrollViewAnimation.interpolate({
                        inputRange: [
                            (index - 1) *
                                verticalScale(newsWrapperContainerHeight),
                            index * verticalScale(newsWrapperContainerHeight),
                            (index + 1) *
                                verticalScale(newsWrapperContainerHeight),
                        ],
                        outputRange: ['0deg', '0deg', '50deg'],
                    }),
                },
            ],
        }
    }

    // item swipe animations on android
    const scrollViewSwipeAndroid = index => {
        return {
            transform: [
                {
                    // translate item by set pixel(only next and prev items)
                    translateX: scrollViewAnimation.interpolate({
                        inputRange: [
                            (index - 1) *
                                verticalScale(newsWrapperContainerHeight),
                            index * verticalScale(newsWrapperContainerHeight),
                            (index + 1) *
                                verticalScale(newsWrapperContainerHeight),
                        ],
                        outputRange: [0, 0, verticalScale(-40)],
                        extrapolate: 'clamp',
                    }),
                },
                {
                    // scale item by set pixel(only next and prev items)
                    rotateX: scrollViewAnimation.interpolate({
                        inputRange: [
                            (index - 1) *
                                verticalScale(newsWrapperContainerHeight),
                            index * verticalScale(newsWrapperContainerHeight),
                            (index + 1) *
                                verticalScale(newsWrapperContainerHeight),
                        ],
                        outputRange: ['0deg', '0deg', '70deg'],
                    }),
                },
                {
                    rotate: scrollViewAnimation.interpolate({
                        inputRange: [
                            (index - 1) *
                                verticalScale(newsWrapperContainerHeight),
                            index * verticalScale(newsWrapperContainerHeight),
                            (index + 1) *
                                verticalScale(newsWrapperContainerHeight),
                        ],
                        outputRange: ['-90deg', '-90deg', '-90deg'],
                    }),
                },
            ],
        }
    }

    const SwipeViewAnimation = index => {
        return Platform.OS === 'ios'
            ? scrollViewSwipeIos(index)
            : scrollViewSwipeAndroid(index)
    }

    // eslint-disable-next-line react/prop-types, no-unused-vars
    const renderNews = ({ item, index }) => {
        return (
            // <Animated.View style={[SwipeViewAnimation(Number(index))]}>
            //     <NewsWrapper>
            //         <LargeNews />
            //     </NewsWrapper>
            // </Animated.View>
            <Animated.View style={[SwipeViewAnimation(Number(index))]}>
                <NewsWrapper>
                    <BigSmallNewsWrapper />
                </NewsWrapper>
            </Animated.View>
        )
    }

    return (
        <>
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
                    length: newsWrapperContainerHeight,
                    offset: newsWrapperContainerHeight * index,
                    index,
                })}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset:
                                    Platform.OS === 'android'
                                        ? { x: scrollViewAnimation }
                                        : { y: scrollViewAnimation },
                            },
                        },
                    ],
                    {
                        useNativeDriver: true,
                    }
                )}
            />
            {/* <Modalize alwaysOpen={100}>
                <Text>content</Text>
            </Modalize> */}
        </>
    )
}

// check prop types
AnimatedFlatList.propTypes = {}

export default AnimatedFlatList
