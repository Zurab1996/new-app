/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import PropTypes from 'prop-types'

// styling configs
import { scale, verticalScale, normalize } from '@configs/size'
// import { Capitalize, ShowAmountCharacters } from '@configs/helpers'

// import image
// eslint-disable-next-line import/order
const defaultPersonImage = require('../../../../assets/images/default-person.jpg')

// sizes initialization
const ContainerWidth = 343

// styled components
const Container = styled.View`
    width: ${scale(ContainerWidth)}px;
    align-items: flex-end;
    align-self: center;
`
const CommentContainer = styled.View`
    flex-direction: row;
    width: ${({ isReply }) => (isReply ? '80%' : '100%')};
    margin-bottom: ${verticalScale(15)}px;
`
const ImageContainer = styled.View`
    width: 20%;
`
const ContentContainer = styled.View`
    width: 80%;
    padding-top: ${verticalScale(2)}px;
    padding-left: ${scale(5)}px;
`
const CommentContentAuthor = styled.Text`
    font-family: Raleway-SemiBold;
    font-size: ${normalize(14)}px;
`
const CommentContainerContent = styled.Text`
    font-family: Raleway;
    font-size: ${normalize(12)}px;
    padding-top: ${verticalScale(2)}px;
    padding-right: ${verticalScale(20)}px;
`
const CommentContainerInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${verticalScale(10)}px;
`
const CommentContainerInfoPostTime = styled.Text`
    font-family: Raleway-Light;
    font-size: ${normalize(10)}px;
`
const CommentContainerInfoReplyText = styled.Text`
    padding-right: ${scale(5)}px;
    font-family: Raleway-Medium;
    font-size: ${normalize(11)}px;
`
const ReplyCommentsContainer = styled.View``

const CommentWrapper = props => {
    const [commentTextNumberOfLines, setCommentTextNumberOfLines] = useState(2)
    const [showReply, setShowReply] = useState(false)

    const changeCommentTextNumberOfLine = () => {
        if (commentTextNumberOfLines === 2) {
            setCommentTextNumberOfLines(100)
        } else {
            setCommentTextNumberOfLines(2)
        }
    }

    const replyComment = () => {
        setShowReply(!showReply)
    }

    const { text, publishedAt, replyCount, isReply, children } = props
    return (
        <Fragment>
            <Container>
                <CommentContainer isReply={isReply}>
                    <ImageContainer>
                        <FastImage
                            style={{
                                width: isReply ? scale(60) : scale(70),
                                height: isReply ? scale(60) : scale(70),
                            }}
                            source={defaultPersonImage}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </ImageContainer>
                    <ContentContainer>
                        <CommentContentAuthor>
                            Name Surname
                        </CommentContentAuthor>
                        <TouchableOpacity
                            onPress={changeCommentTextNumberOfLine}
                        >
                            <CommentContainerContent
                                numberOfLines={commentTextNumberOfLines}
                                ellipsizeMode="tail"
                            >
                                {text}
                            </CommentContainerContent>
                        </TouchableOpacity>
                        <CommentContainerInfo>
                            <CommentContainerInfoPostTime>
                                {publishedAt}
                            </CommentContainerInfoPostTime>
                            <TouchableOpacity onPress={replyComment}>
                                <CommentContainerInfoReplyText>
                                    {replyCount}
                                </CommentContainerInfoReplyText>
                            </TouchableOpacity>
                        </CommentContainerInfo>
                    </ContentContainer>
                </CommentContainer>
            </Container>
            {showReply && (
                <ReplyCommentsContainer>{children}</ReplyCommentsContainer>
            )}
        </Fragment>
    )
}
CommentWrapper.propTypes = {
    isReply: PropTypes.bool,
    text: PropTypes.string,
    publishedAt: PropTypes.string,
    replyCount: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}

export default CommentWrapper
