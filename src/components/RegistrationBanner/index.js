import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

// import sizing
import { scale, verticalScale, normalize } from '@configs/size'

// import components
const Icon = React.lazy(() => import('@components/CustomIcon'))

// styled components
const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const Header = styled.Text`
    font-size: ${normalize(20)}px;
    font-family: Raleway-SemiBold;
    margin-bottom: ${verticalScale(15)}px;
`
const RegistrationButton = styled(TouchableOpacity)`
    width: 90%;
    height: ${verticalScale(50)}px;
    flex-direction: row;
    margin-bottom: ${verticalScale(15)}px;
`
const RegistrationView = styled.View`
    width: 80%;
    height: 100%;
    justify-content: center;
    border-top-left-radius: 50;
    border-bottom-left-radius: 50;
    background-color: ${({ backgroundColor }) => backgroundColor};
`
const RegistrationText = styled.Text`
    padding-left: ${scale(30)}px;
    font-size: ${normalize(15)}px;
    font-family: Raleway-SemiBold;
    color: #ffffff;
`
const SocialIcon = styled.View`
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: green;
    border-top-right-radius: 50;
    border-bottom-right-radius: 50;
    background-color: ${({ backgroundColor }) => backgroundColor};
`

const RegistrationBanner = () => {
    return (
        <Container>
            <Header>Log In</Header>
            <RegistrationButton>
                <RegistrationView backgroundColor="#3B5998">
                    <RegistrationText>Sign in with Facebook</RegistrationText>
                </RegistrationView>
                <SocialIcon backgroundColor="#4A6EA9">
                    <Icon name="facebook" size={scale(30)} color="#ffffff" />
                </SocialIcon>
            </RegistrationButton>
            <RegistrationButton>
                <RegistrationView backgroundColor="#DD4B39">
                    <RegistrationText>Sign in with Google</RegistrationText>
                </RegistrationView>
                <SocialIcon backgroundColor="#E46044">
                    <Icon name="google" size={scale(30)} color="#ffffff" />
                </SocialIcon>
            </RegistrationButton>
            <RegistrationButton>
                <RegistrationView backgroundColor="#55ACEE">
                    <RegistrationText>Sign in with Twitter</RegistrationText>
                </RegistrationView>
                <SocialIcon backgroundColor="#32DEF4">
                    <Icon name="twitter" size={scale(30)} color="#ffffff" />
                </SocialIcon>
            </RegistrationButton>
        </Container>
    )
}

export default RegistrationBanner
