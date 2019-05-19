import React, { Suspense } from 'react'
import styled from 'styled-components'

const LargeNews = React.lazy(() => import('@components/LargeNews'))
const AppBackground = React.lazy(() => import('@components/AppBackground'))
const Header = React.lazy(() => import('@components/PageHeader/index'))

// styled components
const Container = styled.View``

const HeaderText = styled.Text``

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
                <HeaderText>emma</HeaderText>
                <HeaderText>emma</HeaderText>
            </Header>
        </Suspense>
    ),
}

export default TopNews
