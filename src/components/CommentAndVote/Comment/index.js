import React, { Fragment } from 'react'
import styled from 'styled-components'

// styling configs
import { verticalScale } from '@configs/size'

// import components
const CommentWrapper = React.lazy(() =>
    import('@components/CommentAndVote/Comment/Wrapper')
)

// styled components
const Container = styled.View`
    flex: 1;
    padding-top: ${verticalScale(10)}px;
`

const Comment = () => {
    return (
        <Fragment>
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
                        replyCount="REPLY"
                        isReply
                    />
                </CommentWrapper>
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
                        replyCount="REPLY"
                        isReply
                    />
                </CommentWrapper>
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
                        replyCount="REPLY"
                        isReply
                    />
                </CommentWrapper>
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
                        replyCount="REPLY"
                        isReply
                    />
                </CommentWrapper>
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
                        replyCount="REPLY"
                        isReply
                    />
                </CommentWrapper>
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
                        replyCount="REPLY"
                        isReply
                    />
                </CommentWrapper>
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
                        replyCount="REPLY"
                        isReply
                    />
                </CommentWrapper>
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
                        replyCount="REPLY"
                        isReply
                    />
                </CommentWrapper>
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
                        replyCount="REPLY"
                        isReply
                    />
                </CommentWrapper>
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
                        replyCount="REPLY"
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
                        replyCount="REPLY"
                        isReply
                    />
                </CommentWrapper>
            </Container>
        </Fragment>
    )
}

export default Comment
