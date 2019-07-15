import React, { Suspense } from 'react'
import styled from 'styled-components'
import FastImage from 'react-native-fast-image'

import {
    scale,
    verticalScale,
    normalize,
    newsContainerHeight,
} from '@configs/size'
import AppStyles from '@configs/styles'
import { Capitalize, ShowAmountCharacters } from '@configs/helpers'

const OpenNews = React.lazy(() => import('@components/OpenNews/index'))
const Image = React.lazy(() => import('@components/ImageLoader/index'))
const CommentAndVote = React.lazy(() =>
    import('@components/CommentAndVote/index')
)

// styled component
const ContainerHeight = newsContainerHeight
const ContainerWidth = 343
const ImageHeight = 320
const ContentContainerHeight = ContainerHeight - ImageHeight
const HeaderContainerHeight = 70
const SourceContainerHeight = 20
const DescriptionContainerHeight = 80

const Container = styled.View`
    display: flex;
    align-self: center;
    align-items: center;
    height: ${verticalScale(ContainerHeight)}px;
    width: ${scale(ContainerWidth)}px;
    background-color: ${AppStyles.color.COLOR_WHITE};
    border-bottom-right-radius: ${scale(10)}px;
    border-bottom-left-radius: ${scale(10)}px;
`
const NewsContainer = styled.View`
    height: ${verticalScale(ContainerHeight - 5)}px;
    width: ${scale(ContainerWidth)}px;
`
const ImageContainer = styled.View`
    width: 100%;
    height: ${verticalScale(ImageHeight)}px;
`
const ContentContainer = styled.View`
    flex-direction: column;
    width: 100%;
    height: ${verticalScale(ContentContainerHeight)}px;
    padding: ${verticalScale(5)}px ${scale(10)}px;
`
const HeaderContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: ${verticalScale(HeaderContainerHeight)}px;
`
const HeaderTitle = styled.Text`
    width: 75%;
    height: ${verticalScale(HeaderContainerHeight)}px;
    font-family: Raleway-SemiBold;
    font-size: ${normalize(15)}px;
    line-height: ${verticalScale(22)};
    color: ${AppStyles.color.COLOR_DARK_LIGHT};
`
const CommentVote = styled(CommentAndVote)``
const Delimiter = styled.View`
    width: 100%;
    margin: ${verticalScale(5)}px ${scale(2)}px;
    padding: ${verticalScale(2)}px ${scale(2)}px;
    border-bottom-width: ${scale(1)}px;
    border-bottom-color: ${AppStyles.color.COLOR_GREY};
`
const DescriptionContainer = styled.View`
    width: 100%;
    height: ${verticalScale(DescriptionContainerHeight)}px;
`
const Description = styled.Text`
    font-family: Raleway;
    font-size: ${normalize(11)}px;
    line-height: ${verticalScale(18)};
    color: ${AppStyles.color.COLOR_DARK_BLUE};
`
const SourceContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${verticalScale(SourceContainerHeight)}px;
`
const SourceInfo = styled.Text`
    font-size: ${normalize(6)}px;
    font-family: Raleway;
    padding: 0px ${scale(10)}px;
    color: ${AppStyles.color.COLOR_DARK_BLUE};
`

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
                                    'Japan economy beats expectations of slowdown '
                                )}
                            </HeaderTitle>
                            <CommentVote
                                width={`${25}%`}
                                height={`${verticalScale(
                                    HeaderContainerHeight
                                )}px`}
                            />
                        </HeaderContainer>
                        <Delimiter />
                        <DescriptionContainer>
                            <Description numberOfLines={4}>
                                {Capitalize(
                                    // eslint-disable-next-line quotes
                                    "Japan's economy unexpectedly grew in the three months to March, shrugging off forecasts for a contraction in the world's third largest economyJapan's economy unexpectedly grew in the three months to March, shrugging off forecasts for a contraction in the world's third largest economyJapan's economy unexpectedly grew in the three months to March, shrugging off forecasts for a contraction in the world's third largest economy."
                                )}
                            </Description>
                        </DescriptionContainer>
                        <SourceContainer>
                            <SourceInfo>
                                {ShowAmountCharacters('BBC NEWS', 15)}
                            </SourceInfo>
                            <SourceInfo>5Min/ago</SourceInfo>
                        </SourceContainer>
                    </ContentContainer>
                </NewsContainer>
                <OpenNews />
            </Container>
        </Suspense>
    )
}

export default React.memo(LargeNews)
