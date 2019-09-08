import React from 'react'
import styled from 'styled-components'

// import sizing settings
import { scale, verticalScale, newsWrapperContainerHeight } from '@configs/size'

// import components
const BigNews = React.lazy(() => import('@components/News/NewsTypes/Big'))
const SmallNews = React.lazy(() => import('@components/News/NewsTypes/Small'))

// sizes initialization
const SmallNewsWrapperWidth = 343

// styled components
const Container = styled.View`
    height: ${verticalScale(newsWrapperContainerHeight)}px;
    flex-direction: column;
    align-items: center;
`
const SmallNewsContainer = styled.View`
    width: ${scale(SmallNewsWrapperWidth)};
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`

const BigSmallNewsWrapper = () => {
    return (
        <Container>
            <BigNews />
            <SmallNewsContainer>
                <SmallNews />
                <SmallNews />
            </SmallNewsContainer>
        </Container>
    )
}

export default BigSmallNewsWrapper
