import React, { useRef, Fragment } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Modalize from 'react-native-modalize'

import { scale, verticalScale } from '@configs/size'
import AppStyle from '@configs/styles'

// reusable components
const Icon = React.lazy(() => import('@components/CustomIcon/index'))
const Comment = React.lazy(() =>
    import('@components/CommentAndVote/Comment/index')
)
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
    font-family: Raleway-ExtraLight;
`

// components
// eslint-disable-next-line react/prop-types
const CommentAndVote = ({ width, height, onOpenCommentModal }) => {
    const modalRef = useRef(null)
    const onPressComment = () => {
        onOpenCommentModal(() => {
            const modal = modalRef.current
            if (modal) {
                modal.open()
            }
        })
        // if (typeof onOpenCommentModal === 'function') {
        //     const modal = modalRef.current
        //     if (modal) {
        //         modal.open()
        //         onOpenCommentModal()
        //     }
        // }
    }

    return (
        <Fragment>
            <Container width={width} height={height}>
                <IconContainer>
                    <CustomIcon name="vote" size={scale(22)} />
                    <Amount>23</Amount>
                </IconContainer>
                <IconContainer>
                    <TouchableOpacity onPress={onPressComment}>
                        <CustomIcon name="comment" size={scale(22)} />
                        <Amount>23</Amount>
                    </TouchableOpacity>
                </IconContainer>
            </Container>
            <Modalize
                withReactModal
                ref={modalRef}
                modalStyle={{
                    backgroundColor: AppStyle.color.COLOR_LIGHT_PINK,
                }}
            >
                <Comment />
            </Modalize>
        </Fragment>
    )
}

// check prop types
CommentAndVote.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}

export default CommentAndVote
