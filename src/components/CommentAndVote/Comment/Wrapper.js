/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'

// styling configs
import { scale, verticalScale, normalize } from '@configs/size'
// import { Capitalize, ShowAmountCharacters } from '@configs/helpers'

// import image
// eslint-disable-next-line import/order
const defaultPersonImage = require('../../../assets/images/default-person.jpg')

// sizes initialization
const ContainerWidth = 343
const ContainerMaxHeight = 70
// is Reply props for every(important) styled component

// styled components
const Container = styled.View`
    width: ${scale(ContainerWidth)}px;
    max-height: ${verticalScale(ContainerMaxHeight)}px;
    align-self: center;
`
const CommentContainer = styled.View`
    flex-direction: row;
    width: ${({ isReply }) => (isReply ? '80%' : '100%')};
    height: 100%;
`
const ImageContainer = styled.View`
    width: 20%;
    height: 100%;
`
const ContentContainer = styled.View`
    width: ${({ isReply }) => (isReply ? '60%' : '80%')};
    height: 100%;
    padding-top: ${verticalScale(2)}px;
    padding-left: ${scale(5)}px;
`
const CommentContentAuthor = styled.Text`
    font-family: Raleway-SemiBold;
    font-size: ${normalize(14)}px;
    height: 25%;
`
const CommentContainerContent = styled.Text`
    font-family: Raleway;
    font-size: ${normalize(12)}px;
    padding-top: ${verticalScale(2)}px;
    padding-right: ${verticalScale(20)}px;
    height: 55%;
`
const CommentContainerInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 20%;
`
const CommentContainerInfoPostTime = styled.Text`
    font-family: Raleway-Light;
    font-size: ${normalize(10)}px;
`
const CommentContainerInfoReplyButton = styled(TouchableOpacity)``
const CommentContainerInfoReplyText = styled.Text`
    padding-right: ${scale(5)}px;
    font-family: Raleway-Medium;
    font-size: ${normalize(11)}px;
`

const CommentWrapper = () => {
    return (
        <Container>
            <CommentContainer>
                <ImageContainer>
                    <FastImage
                        style={{ width: '100%', height: '100%' }}
                        source={defaultPersonImage}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </ImageContainer>
                <ContentContainer>
                    <CommentContentAuthor>Name Surname</CommentContentAuthor>
                    <CommentContainerContent
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the industry's standard dummy text
                    </CommentContainerContent>
                    <CommentContainerInfo>
                        <CommentContainerInfoPostTime>
                            13 minutes age
                        </CommentContainerInfoPostTime>
                        <CommentContainerInfoReplyButton>
                            <CommentContainerInfoReplyText>
                                REPLY
                            </CommentContainerInfoReplyText>
                        </CommentContainerInfoReplyButton>
                    </CommentContainerInfo>
                </ContentContainer>
            </CommentContainer>
        </Container>
    )
}

export default CommentWrapper
