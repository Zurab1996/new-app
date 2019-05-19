import React, { useState } from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components'
import FastImage from 'react-native-fast-image'
import PropTypes from 'prop-types'

import AppStyle from '@configs/styles'

// styled components
const Container = styled.View`
    position: relative;
`

const Image = styled(FastImage)`
    position: absolute;
    z-index: -100;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
`

const Overlay = styled.View`
    position: absolute;
    z-index: 100;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    opacity: ${({ opacity }) => opacity};
    background-color: ${AppStyle.color.COLOR_WHITE};
`

// animate overlay
const AnimatedOverlay = Animated.createAnimatedComponent(Overlay)

// component
const ImageLoader = ({ source, resizeMode, imageStyle, overlayStyle }) => {
    const [showOverlay, setShowOverlay] = useState(new Animated.Value(1))

    const ImageLoaded = () => {
        Animated.timing(showOverlay, {
            toValue: 0,
            duration: 400,
        }).start(() => {
            setShowOverlay(0)
        })
    }

    const overlay = () => {
        if (showOverlay) {
            return (
                <AnimatedOverlay
                    height={overlayStyle.height}
                    width={overlayStyle.width}
                    opacity={showOverlay}
                />
            )
        }
    }
    return (
        <Container>
            <Image
                height={imageStyle.height}
                width={imageStyle.width}
                source={source}
                resizeMode={resizeMode}
                onLoadEnd={ImageLoaded}
            />
            {overlay()}
        </Container>
    )
}

// check prop types
ImageLoader.propTypes = {
    source: PropTypes.objectOf(Object).isRequired,
    resizeMode: PropTypes.string.isRequired,
    overlayStyle: PropTypes.objectOf(Object).isRequired,
    imageStyle: PropTypes.objectOf(Object).isRequired,
}

export default ImageLoader
