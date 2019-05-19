import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ifIphoneX } from '@configs/iphoneXHelper'
import AppStyle from '@configs/styles'

// styled components
const Container = styled.View`
    background-color: ${AppStyle.color.COLOR_LIGHT_PINK};
`
const Wrapper = styled.View`
    flex-direction: row;
`

// components
const PageHeader = ({ children }) => (
    <Container
        style={{
            ...ifIphoneX(
                {
                    height: 89,
                },
                {
                    height: 65,
                },
                {
                    height: 50,
                }
            ),
        }}
    >
        <Wrapper
            style={{
                ...ifIphoneX(
                    {
                        paddingTop: 44,
                    },
                    {
                        paddingTop: 20,
                    },
                    {
                        paddingTop: 0,
                    }
                ),
            }}
        >
            {children}
        </Wrapper>
    </Container>
)

// check prop types
PageHeader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
}

export default PageHeader
