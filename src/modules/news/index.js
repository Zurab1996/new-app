import React, { Suspense } from 'react'
import styled from 'styled-components'

import { Capitalize } from '@configs/helpers'
import AppStyle from '@configs/styles'

const LargeNews = React.lazy(() => import('@components/LargeNews'))
const AppBackground = React.lazy(() => import('@components/AppBackground'))
const Header = React.lazy(() => import('@components/PageHeader/index'))

// styled components
const Container = styled.View``

const HeaderText = styled.Text`
    font-family: Montserrat-SemiBold;
    font-size: 18px;
    color: ${AppStyle.color.COLOR_PINK};
`

// component
const TopNews = () => {
    return (
        <Suspense fallback={null}>
            <Container>
                <AppBackground />
                <LargeNews />
            </Container>
        </Suspense>
    )
}

// check prop types
TopNews.navigationOptions = {
    header: (
        <Suspense fallback={null}>
            <Header>
                <HeaderText>{Capitalize('Header')}</HeaderText>
            </Header>
        </Suspense>
    ),
}

export default TopNews
