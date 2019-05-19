import React, { Suspense } from 'react'
import styled from 'styled-components'
import FastImage from 'react-native-fast-image'

import { scale, verticalScale } from '@configs/size'
import AppStyles from '@configs/styles'

const OpenNews = React.lazy(() => import('@components/OpenNews/index'))
const Image = React.lazy(() => import('@components/ImageLoader/index'))

// styled component
const ContainerHeight = 515
const ContainerWidth = 343

const ImageHeight = 320

const Container = styled.View`
    display: flex;
    align-self: center;
    align-items: center;
    height: ${verticalScale(ContainerHeight)}px;
    width: ${scale(ContainerWidth)}px;
    background-color: ${AppStyles.color.COLOR_WHITE};
`

const NewsContainer = styled.View`
    height: ${verticalScale(ContainerHeight - 5)}px;
    width: ${scale(ContainerWidth)}px;
`

const ImageContainer = styled.View`
    width: ${scale(ContainerWidth)};
    height: ${verticalScale(ImageHeight)};
    background-color: red;
`

// component
const LargeNews = () => {
    return (
        <Container>
            <Suspense fallback={null}>
                <NewsContainer>
                    <ImageContainer>
                        <Image
                            imageStyle={{
                                width: scale(ContainerWidth),
                                height: verticalScale(ImageHeight),
                            }}
                            overlayStyle={{
                                width: scale(ContainerWidth),
                                height: verticalScale(ImageHeight),
                            }}
                            source={{
                                uri:
                                    'https://live.staticflickr.com/7712/16991019227_d83b18ea2c_b.jpg',
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </ImageContainer>
                </NewsContainer>
                <OpenNews />
            </Suspense>
        </Container>
    )
}

export default React.memo(LargeNews)
