import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { scale, verticalScale } from '@configs/size'
import AppStyle from '@configs/styles'

const Icon = React.lazy(() => import('@components/CustomIcon/index'))

// styled components
const Container = styled.View`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    flex-direction: column;
    justify-content: space-between;
`

const CustomIcon = styled(Icon)`
    color: ${AppStyle.color.COLOR_ORANGE};
`

const IconContainer = styled.View`
    align-items: center;
    align-self: flex-end;
`

const Amount = styled.Text`
    font-size: ${verticalScale(10)}px;
    font-family: Montserrat-ExtraLight;
`

// components
const CommentAndVote = ({ width, height }) => {
    return (
        <Container width={width} height={height}>
            <IconContainer>
                <CustomIcon name="vote" size={scale(22)} />
                <Amount>23</Amount>
            </IconContainer>
            <IconContainer>
                <CustomIcon name="comment" size={scale(22)} />
                <Amount>23</Amount>
            </IconContainer>
        </Container>
    )
}

// check prop types
CommentAndVote.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}

export default CommentAndVote
