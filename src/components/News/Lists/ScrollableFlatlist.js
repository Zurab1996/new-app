import React from 'react'
import { FlatList, Platform, StyleSheet } from 'react-native'

// import styling configs
import { verticalScale, newsWrapperContainerHeight } from '@configs/size'

// import components
const BigSmallNewsWrapper = React.lazy(() =>
    import('@components/News/Wrappers/BigSmallNews')
)
const NewsWrapper = React.lazy(() => import('@components/News/Wrappers/News'))

// react native styles
const styles = StyleSheet.create({
    newsWrapper: {
        marginBottom: verticalScale(2),
    },
})

// component
const ScrollableFlatList = () => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const renderNews = ({ item, index }) => {
        return (
            <NewsWrapper style={styles.newsWrapper}>
                <BigSmallNewsWrapper />
            </NewsWrapper>
        )
    }
    return (
        <>
            <FlatList
                renderItem={renderNews}
                data={[2, 1, 3, 4, 5, 8, 9, 7, 0]}
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
            />
        </>
    )
}

export default ScrollableFlatList
