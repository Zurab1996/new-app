import { Dimensions } from 'react-native'

import { isIphoneX } from '@configs/iphoneXHelper'

const { width, height } = Dimensions.get('window')

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = isIphoneX() ? 680 : 670

const scale = size => (width / guidelineBaseWidth) * size
const verticalScale = size => (height / guidelineBaseHeight) * size
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor

export { scale, verticalScale, moderateScale }
