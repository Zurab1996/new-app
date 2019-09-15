import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { verticalScale, newsWrapperHeight } from '@configs/size'

const Container = styled.View`
    height: ${verticalScale(newsWrapperHeight)}px;
`

const NewsWrapper = ({ children, style }) => (
    <Container style={style}>{children}</Container>
)

NewsWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    style: PropTypes.instanceOf(Object),
}
NewsWrapper.defaultProps = {
    style: null,
}

export default NewsWrapper
