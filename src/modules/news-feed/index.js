import React, { Suspense } from 'react'
import styled from 'styled-components'

// import styling configs
import { Capitalize } from '@configs/helpers'
import { verticalScale } from '@configs/size'

// styling configs
import AppStyles from '@configs/styles'

//  import components
const AppBackground = React.lazy(() => import('@components/AppBackground'))
const Header = React.lazy(() => import('@components/PageHeader/index'))
const RegistrationBanner = React.lazy(() =>
    import('@components/RegistrationBanner')
)

// styled components
const Wrapper = styled.View`
    flex: 1;
    background-color: ${({ loggedIn }) =>
        !loggedIn ? AppStyles.color.COlOR_GREY_TRANSPARENT : 'transparent'};
`
const Container = styled.View`
    height: ${verticalScale(515)}px;
`
const HeaderText = styled.Text`
    font-family: Raleway;
    font-size: 18px;
    color: ${AppStyles.color.COLOR_PINK};
`

// component
const TopNews = () => {
    return (
        <Suspense fallback={null}>
            <Wrapper loggedIn={false}>
                <Container>
                    <RegistrationBanner />
                </Container>
            </Wrapper>
            <AppBackground />
        </Suspense>
    )
}

// check prop types
TopNews.navigationOptions = {
    header: (
        <Suspense fallback={null}>
            <Header>
                <HeaderText>{Capitalize('News Feed')}</HeaderText>
            </Header>
        </Suspense>
    ),
}

export default TopNews
