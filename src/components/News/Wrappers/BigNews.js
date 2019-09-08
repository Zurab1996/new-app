import React from 'react'
import styled from 'styled-components'

// import sizing settings
import { verticalScale, newsWrapperContainerHeight } from '@configs/size'

// import components
const BigNews = React.lazy(() => import('@components/News/NewsTypes/Big'))

// styled components
const Container = styled.View`
    height: ${verticalScale(newsWrapperContainerHeight)}px;
    flex-direction: column;
    align-items: center;
`

const BigNewsWrapper = () => {
    return (
        <Container>
            <BigNews />
            <BigNews bottom />
        </Container>
    )
}

export default BigNewsWrapper
