import React from 'react'
import styled from 'styled-components'

import { scale, verticalScale } from '@configs/size'

const Container = styled.View`
    display: flex;
    align-self: center;
    width: ${scale(340)}px;
    height: ${verticalScale(520.35)}px;
    background-color: red;
`
const LargeNews = () => {
    return <Container />
}

export default LargeNews
