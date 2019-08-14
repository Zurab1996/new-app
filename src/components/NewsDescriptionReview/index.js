import React from 'react'
import styled from 'styled-components'

import { scale, verticalScale } from '@configs/size'

// initialize sizing
const DescriptionVerticalSizing = 5
const DescriptionHorizontalSizing = 7

// styled components
const Container = styled.View`
    width: 100%;
    height: 100%;
`

const Description = styled.View`
    padding-left: ${scale(DescriptionHorizontalSizing)}px;
    padding-right: ${scale(DescriptionHorizontalSizing)}px;
    padding-top: ${verticalScale(DescriptionVerticalSizing)}px;
    padding-bottom: ${verticalScale(DescriptionVerticalSizing)}px;
`

const NewsDescriptionReview = ({ description }) => {
    return (
        <Container>
            <Description>
                asdas asdjaosdhakub auisdhiuashdiuashdaib auisdhaiudhai
                baisbdiuas
            </Description>
        </Container>
    )
}

export default NewsDescriptionReview
