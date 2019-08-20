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
            <CommentWrapper />
        </Container>
    )
}

export default Comment
