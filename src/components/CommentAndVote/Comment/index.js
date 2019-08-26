import React from 'react'
import styled from 'styled-components'

// styling configs
import { verticalScale } from '@configs/size'

// import components
const CommentWrapper = React.lazy(() =>
    import('@components/CommentAndVote/Comment/Wrapper')
)

// styled components
const Container = styled.View`
    padding-top: ${verticalScale(10)}px;
`

const Comment = () => {
    return (
        <Container>
            <CommentWrapper
                text="Lorem Ipsum has been the industry's standard dummy text
                        ever since the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text
                        ever since the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text
                        ever since the industry's standard dummy text"
                publishedAt="13 minutes age"
                replyCount="REPLY 0"
                isReply={false}
            >
                <CommentWrapper
                    text="Lorem Ipsum has been the industry's standard dummy text
                        ever since the industry's standard dummy text"
                    publishedAt="13 minutes age"
                    replyCount="REPLY 0"
                    isReply
                />
            </CommentWrapper>
            <CommentWrapper
                text="Lorem Ipsum has been the industry's standard dummy text
                        ever since the industry's standard dummy text"
                publishedAt="13 minutes age"
                replyCount="REPLY 0"
                isReply={false}
            >
                <CommentWrapper
                    text="Lorem Ipsum has been the industry's standard dummy text
                        ever since the industry's standard dummy text"
                    publishedAt="13 minutes age"
                    replyCount="REPLY 0"
                    isReply
                />
            </CommentWrapper>
        </Container>
    )
}

export default Comment
