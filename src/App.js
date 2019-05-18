import React from 'react'
import { useScreens } from 'react-native-screens'
import styled from 'styled-components'
import { SafeAreaView } from 'react-navigation'

// import { getStatusBarHeight } from '@configs/iphoneXHelper'
import Router from '@src/router'

useScreens()

// STYLED COMPONENTS START
const Container = styled(SafeAreaView)`
    width: 100%;
    height: 100%;
`
// STYLED COMPONENTS END

const App = () => (
    <Container forceInset={{ top: 'never', bottom: 'never' }}>
        <Router />
    </Container>
)

export default App
