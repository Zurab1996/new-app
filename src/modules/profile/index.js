import React, { Suspense } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

// import sizing configs
import { scale, verticalScale, normalize } from '@configs/size'
import AppStyles from '@configs/styles'

// reusable components
const Icon = React.lazy(() => import('@components/CustomIcon/index'))

// style sizing
const socialContainerWidth = 275
const socialContainerHeight = 50

// styled components
const Container = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${AppStyles.color.COLOR_WHITE};
`
const SocialIconContainer = styled(TouchableOpacity)`
    flex-direction: row;
    height: ${verticalScale(socialContainerHeight)}px;
    width: ${scale(socialContainerWidth)}px;
    margin-bottom: ${verticalScale(20)}px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
`
const SocialText = styled.Text`
    width: 80%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    font-size: ${normalize(15)}px;
    font-family: Raleway-SemiBold;
    font-weight: 600;
    color: white;
`
const SocialIcon = styled(Icon)`
    width: 20%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
`

const TopNews = () => {
    return (
        <Suspense fallback={null}>
            <Container>
                <SocialIconContainer>
                    <SocialText backgroundColor="rgba(59, 89, 152, 1)">
                        Sign in with Facebook
                    </SocialText>
                    <SocialIcon
                        backgroundColor="rgba(74, 110, 169,1)"
                        size={30}
                    />
                </SocialIconContainer>
                <SocialIconContainer>
                    <SocialText backgroundColor="rgba(221, 75, 57, 1)">
                        Sign in with Google
                    </SocialText>
                    <SocialIcon
                        backgroundColor="rgba(228, 96, 68,1)"
                        size={30}
                    />
                </SocialIconContainer>
                <SocialIconContainer>
                    <SocialText backgroundColor="rgba(85, 172, 238, 1)">
                        Sign in with Twitter
                    </SocialText>
                    <SocialIcon
                        backgroundColor="rgba(50, 222, 244,1)"
                        size={30}
                    />
                </SocialIconContainer>
            </Container>
        </Suspense>
    )
}

export default TopNews
