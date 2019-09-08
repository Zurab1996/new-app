import React, { useRef, Fragment, useState, useEffect } from 'react'
import { TouchableOpacity, Keyboard, StyleSheet } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Modalize from 'react-native-modalize'
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

import { verticalScale, scale, normalize } from '@configs/size'
import AppStyle from '@configs/styles'

// reusable components
const Icon = React.lazy(() => import('@components/CustomIcon/index'))
const Comment = React.lazy(() =>
    import('@components/CommentAndVote/Comment/index')
)

// init sizing
const CommentInputPadding = 10
const defaultCommentInputContentHeight = 17
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
const CommentInputWrapper = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const CommentInput = styled.TextInput`
    flex: 3;
    height: ${({ commentInputContentHeight }) =>
        commentInputContentHeight > 0
            ? verticalScale(defaultCommentInputContentHeight) +
              commentInputContentHeight
            : verticalScale(50)}px;
    margin-bottom: ${({ keyboardVisible }) =>
        keyboardVisible ? verticalScale(40) : verticalScale(3)}px;
    margin-top: ${verticalScale(3)}px;
    margin-left: ${scale(5)}px;
    padding: ${scale(CommentInputPadding)}px;
    border-width: 1px;
    border-radius: ${scale(20)}px;
    border-color: #ccc;
    font-size: ${normalize(16)}px;
`
const CommentAddButton = styled(TouchableOpacity)`
    flex: 1;
    height: ${verticalScale(40)}px;
    margin-left: ${scale(5)}px;
    margin-right: ${scale(5)}px;
    margin-bottom: ${({ keyboardVisible }) =>
        keyboardVisible ? verticalScale(40) : verticalScale(3)}px;
    border-width: 2px;
    border-radius: ${scale(18)}px;
    border-color: #ccc;
`
const CommentAddButtonText = styled.Text`
    height: 100%;
    text-align: center;
    font-size: ${normalize(15)}px;
    line-height: ${normalize(30)}px;
    font-weight: 600;
`
// react native styles
const styles = StyleSheet.create({
    keyboardAccessoryView: {
        backgroundColor: AppStyle.color.COLOR_LIGHT_PINK,
    },
    commentInput: {
        textAlignVertical: 'top',
    },
})

// components
// eslint-disable-next-line react/prop-types
const CommentAndVote = ({ width, height, onOpenCommentModal }) => {
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)
    const [commentInputContentHeight, setCommentInputContentHeight] = useState(
        0
    )
    const modalRef = useRef(null)

    useEffect(() => {
        const keyboardShowEventListener = Keyboard.addListener(
            'keyboardDidShow',
            handleKeyboardShow
        )
        const keyboardHideEventListener = Keyboard.addListener(
            'keyboardDidHide',
            handleKeyboardHide
        )
        return () => {
            keyboardShowEventListener.remove()
            keyboardHideEventListener.remove()
        }
    }, [])

    const onPressComment = () => {
        onOpenCommentModal(() => {
            const modal = modalRef.current
            if (modal) {
                modal.open()
            }
        })
    }
    const handleKeyboardShow = () => {
        setIsKeyboardVisible(true)
    }
    const handleKeyboardHide = () => {
        setIsKeyboardVisible(false)
    }
    const getCommentLineHeight = event => {
        const { nativeEvent } = event
        if (nativeEvent.contentSize.height <= 120) {
            setCommentInputContentHeight(event.nativeEvent.contentSize.height)
        }
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
                keyboardAvoidingBehavior="height"
                modalStyle={{
                    backgroundColor: AppStyle.color.COLOR_LIGHT_PINK,
                }}
                FooterComponent={
                    <KeyboardAccessoryView
                        style={styles.keyboardAccessoryView}
                        alwaysVisible
                        inSafeAreaView
                    >
                        <CommentInputWrapper>
                            <CommentInput
                                style={styles.commentInput}
                                underlineColorAndroid="transparent"
                                multiline
                                onContentSizeChange={getCommentLineHeight}
                                keyboardVisible={isKeyboardVisible}
                                commentInputContentHeight={
                                    commentInputContentHeight
                                }
                            />
                            <CommentAddButton
                                keyboardVisible={isKeyboardVisible}
                            >
                                <CommentAddButtonText>Add</CommentAddButtonText>
                            </CommentAddButton>
                        </CommentInputWrapper>
                    </KeyboardAccessoryView>
                }
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
