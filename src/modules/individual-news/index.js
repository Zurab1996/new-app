import React, { Suspense } from 'react'
import styled from 'styled-components'
import FastImage from 'react-native-fast-image'

// import sizing configs
import {
    scale,
    verticalScale,
    normalize,
    newsContainerHeight,
} from '@configs/size'
import AppStyles from '@configs/styles'
import { Capitalize, ShowAmountCharacters } from '@configs/helpers'

// reusable news components
const Image = React.lazy(() => import('@components/ImageLoader/index'))

// style sizing
const ContainerWidth = 340
const ImageHeight = 320

// styled components
const Container = styled.ScrollView`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: ${AppStyles.color.COLOR_WHITE};
    align-self: center;
    width: ${scale(ContainerWidth)}px;
`
const NewsContainer = styled.View``
const NewsImage = styled.View`
    height: ${verticalScale(ImageHeight)}px;
`
const NewsHeader = styled.Text`
    margin-top: ${verticalScale(10)}px;
    font-family: Raleway-SemiBold;
    font-size: ${normalize(15)}px;
    line-height: ${verticalScale(22)};
    color: ${AppStyles.color.COLOR_DARK_LIGHT};
`
const NewDescription = styled.Text`
    margin-top: ${verticalScale(10)}px;
    font-family: Raleway-SemiBold;
    font-size: ${normalize(13)}px;
    line-height: ${verticalScale(22)};
    color: ${AppStyles.color.COLOR_DARK_LIGHT};
`
const Delimiter = styled.View`
    width: ${scale(ContainerWidth)}px;
    margin: ${verticalScale(5)}px ${scale(2)}px;
    padding: ${verticalScale(2)}px ${scale(2)}px;
    border-bottom-width: ${scale(1)}px;
    border-bottom-color: ${AppStyles.color.COLOR_GREY};
`
// const CommentContainer = styled.View`
//     display: flex;
//     flex-direction: row;
//     margin-top: ${verticalScale(5)}px;
// `
// const commnetWrapper = styled.View``
// const Comment = styled.View`
//     width: ${scale(ContainerWidth)}px;
// `
// const CommentImage = styled(Image)`
//     width: 20%;
// `
// const CommentText = styled.Text`
//     width: 80%;
// `
// const Review = styled.View`
//     width: 80%;
//     align-self: flex-end;
// `
// const ReviewImage = styled(Image)``
// const ReviewText = styled.Text``

const IndividualNews = () => {
    return (
        <Suspense fallback={null}>
            <Container>
                <NewsContainer>
                    <NewsImage>
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
                            resizeMode={FastImage.resizeMode.center}
                        />
                    </NewsImage>
                    <NewsHeader>
                        {Capitalize(
                            'Kyoto Animation fire: At least 23 dead after suspected arson attack'
                        )}
                    </NewsHeader>
                    <Delimiter />
                    <NewDescription>
                        Local media quoted police as saying a man broke into the
                        Kyoto Animation Co studio on Thursday morning. Police
                        say the suspect, a 41-year-old, sprayed petrol before
                        igniting it. Some people still remain unaccounted for,
                        broadcaster NHK reported. The suspect has been detained
                        and was taken to hospital with injuries. Japan's Prime
                        Minister Shinzo Abe said the incident was "too appalling
                        for words" and offered condolences to those affected.
                    </NewDescription>
                    {/* <CommentContainer>
                        <Comment>

                            <CommentImage
                                imageStyle={{
                                    width: scale(50),
                                    height: verticalScale(50),
                                }}
                                overlayStyle={{
                                    width: scale(50),
                                    height: verticalScale(50),
                                }}
                                source={{
                                    uri:
                                        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
                                    priority: FastImage.priority.normal,
                                }}
                                resizeMode={FastImage.resizeMode.center}
                            />
                            <CommentText>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s,
                            </CommentText>
                        </Comment>
                    </CommentContainer> */}
                </NewsContainer>
            </Container>
        </Suspense>
    )
}

export default IndividualNews
