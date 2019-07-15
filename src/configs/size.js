import { Dimensions, Platform, PixelRatio } from 'react-native'

import { isIphoneX } from '@configs/iphoneXHelper'

const { width, height } = Dimensions.get('window')

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = isIphoneX() ? 680 : 670

const scale = size => (width / guidelineBaseWidth) * size
const verticalScale = size => (height / guidelineBaseHeight) * size
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor

// font normalizer
const { width: SCREEN_WIDTH } = Dimensions.get('window')

// based on iphone 5s's scale
const fontScale = SCREEN_WIDTH / 320

// normalizer of font
const normalize = size => {
    const newSize = size * fontScale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}

// default height News Wrapper
const newsWrapperHeight = 515
const newsContainerHeight = 510
const newsWrapperContainerHeight = 520

export {
    scale,
    verticalScale,
    moderateScale,
    normalize,
    newsWrapperHeight,
    newsContainerHeight,
    newsWrapperContainerHeight,
}
