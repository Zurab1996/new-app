import React from 'react'
import styled from 'styled-components'
import FastImage from 'react-native-fast-image'

// styling configs
import { scale, verticalScale, normalize } from '@configs/size'
import { Capitalize, ShowAmountCharacters } from '@configs/helpers'
import AppStyles from '@configs/styles'

// import components
const OpenNews = React.lazy(() => import('@components/OpenNews/index'))
const Image = React.lazy(() => import('@components/ImageLoader/index'))
const CommentAndVote = React.lazy(() =>
    import('@components/CommentAndVote/index')
)

// sizes initialization
const ContainerWidth = 169
const ContainerHeight = 250
const ImageHeight = 140
const ContentContainerHeight = ContainerHeight - ImageHeight
const HeaderContainerHeight = 85
const SourceContainerHeight = 20

// styled components
const Container = styled.View`
    height: ${verticalScale(ContainerHeight)}px;
    width: ${scale(ContainerWidth)}px;
    align-self: center;
    align-items: center;
    background-color: ${AppStyles.color.COLOR_WHITE};
    border-bottom-right-radius: ${scale(10)}px;
    border-bottom-left-radius: ${scale(10)}px;
    border-top-left-radius: ${({ bottom }) => (bottom ? scale(10) : 0)}px;
    border-top-left-radius: ${({ bottom }) => (bottom ? scale(10) : 0)}px;
    margin-top: ${({ bottom }) => (bottom ? verticalScale(10) : 0)}px;
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
const SmallNews = () => {
    return (
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
                            height={`${verticalScale(HeaderContainerHeight)}px`}
                        />
                    </HeaderContainer>
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
    )
}

export default SmallNews
