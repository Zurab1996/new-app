import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextByFont = styled.Text`
    font-family: ${({ font }) => font};
`
const TextFont = ({ children, font }) => (
    <TextByFont font={font}>{children}</TextByFont>
)

TextFont.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    font: PropTypes.string.isRequired,
}

export default TextFont
