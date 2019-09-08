import React from 'react'
import { Platform } from 'react-native'
import styled from 'styled-components'

import Icon from '@components/CustomIcon'

import { scale, verticalScale } from '@configs/size'
import AppStyles from '@configs/styles'

const Container = styled.View`
    width: ${({ width }) => (width ? scale(width) : scale(40))};
    height: ${({ height }) =>
        height ? verticalScale(height) : verticalScale(10)};
    border-radius: 50px;
    border: 1px solid ${AppStyles.color.COLOR_ORANGE};
    background-color: ${AppStyles.color.COLOR_WHITE};
`

const SwipeIcon = styled(Icon)`
    margin: auto;
    margin-top: ${verticalScale(Platform.OS === 'ios' ? -4 : -7)};
`

const OpenNews = () => (
    <Container>
        <SwipeIcon
            name="swipe"
            size={scale(Platform.OS === 'ios' ? 20 : 19)}
            color={AppStyles.color.COLOR_ORANGE}
        />
    </Container>
)

export default OpenNews
