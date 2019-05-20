import React, { Suspense } from 'react'
import styled from 'styled-components'
import FastImage from 'react-native-fast-image'

import { scale, verticalScale } from '@configs/size'
import AppStyles from '@configs/styles'
import { Capitalize } from '@configs/helpers'

const OpenNews = React.lazy(() => import('@components/OpenNews/index'))
const Image = React.lazy(() => import('@components/ImageLoader/index'))
const CommentAndVote = React.lazy(() =>
    import('@components/CommentAndVote/index')
)

// styled component
const ContainerHeight = 510
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
    width: 100%;
    height: ${verticalScale(ImageHeight)}px;
    background-color: red;
`

const ContentContainer = styled.View`
    flex-direction: column;
    width: 100%;
    height: ${verticalScale(ContainerHeight - ImageHeight)}px;
    padding: 2%;
`

const HeaderContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50%;
    border-bottom-width: ${scale(1)}px;
    border-bottom-color: ${AppStyles.color.COLOR_GREY};
`

const HeaderTitle = styled.Text`
    width: 75%;
    height: 40%;
    font-family: Montserrat-Medium;
    font-size: ${verticalScale(15)}px;
    color: ${AppStyles.color.COLOR_DARK_LIGHT};
`

const CommentVote = styled(CommentAndVote)``

// component
const LargeNews = () => {
    return (
        <Suspense fallback={null}>
            <Container>
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
                    <ContentContainer>
                        <HeaderContainer>
                            <HeaderTitle numberOfLines={3}>
                                {Capitalize(
                                    'US lifts steel and aluminium tariffs on Canada '
                                )}
                            </HeaderTitle>
                            <CommentVote width={`${25}%`} height={`${50}%`} />
                        </HeaderContainer>
                    </ContentContainer>
                </NewsContainer>
                <OpenNews />
            </Container>
        </Suspense>
    )
}

export default React.memo(LargeNews)
