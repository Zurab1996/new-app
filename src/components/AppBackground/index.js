import React from 'react'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import uuid from 'uuid'

import { scale, verticalScale } from '@configs/size'
import AppStyles from '@configs/styles'

const SticksStyles = [
    {
        width: 300,
        height: 60,
        top: 10,
        left: -60,
    },

    {
        width: 300,
        height: 70,
        top: 45,
        left: -90,
    },

    {
        width: 500,
        height: 50,
        top: 20,
        left: -160,
    },
    {
        width: 300,
        height: 70,
        top: 25,
        left: -30,
    },
    {
        width: 400,
        height: 60,
        top: 100,
        left: -160,
    },
    {
        width: 500,
        height: 70,
        top: 40,
        left: -130,
    },
    {
        width: 230,
        height: 70,
        top: 0,
        left: 100,
    },

    {
        width: 330,
        height: 50,
        top: -10,
        left: 70,
    },
]

const Container = styled.View`
    position: absolute;
    z-index: -100;
    top: ${scale(50)}px;
`

const FirstStick = styled(LinearGradient)`
    width: ${({ width }) => verticalScale(width)}px;
    height: ${({ height }) => scale(height)}px;
    top: ${({ top }) => verticalScale(top)}px;
    left: ${({ left }) => scale(left)}px;
    transform: rotate(-45deg);
    border-radius: 50px;
`

const AppBackground = () => {
    const renderBackgroundSticks = () => {
        return SticksStyles.map(stick => {
            return (
                <FirstStick
                    key={uuid.v1()}
                    colors={[
                        AppStyles.color.COLOR_MEDIUM_PINK,
                        AppStyles.color.COLOR_BLUE,
                    ]}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                    width={stick.width}
                    height={stick.height}
                    top={stick.top}
                    left={stick.left}
                />
            )
        })
    }
    return <Container>{renderBackgroundSticks()}</Container>
}

export default AppBackground
