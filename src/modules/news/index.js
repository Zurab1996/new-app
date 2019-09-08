import React, { Suspense } from 'react'
import styled from 'styled-components'

import { Capitalize } from '@configs/helpers'
import { verticalScale } from '@configs/size'

import AppStyle from '@configs/styles'

const AnimatedFlatList = React.lazy(() =>
    import('@components//News/Lists/AnimatedFlatlist')
)
const AppBackground = React.lazy(() => import('@components/AppBackground'))
const Header = React.lazy(() => import('@components/PageHeader/index'))

// styled components
const Container = styled.View`
    height: ${verticalScale(515)}px;
`

const HeaderText = styled.Text`
    font-family: Raleway;
    font-size: 18px;
    color: ${AppStyle.color.COLOR_PINK};
`

// component
const TopNews = () => {
    return (
        <Suspense fallback={null}>
            <Container>
                <AppBackground />
                <AnimatedFlatList />
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
