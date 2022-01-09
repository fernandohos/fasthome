import React, { useState, useRef } from 'react';
import * as C from './styles';
import Image from 'next/image';
import useDraggableScroll from 'use-draggable-scroll';
import arrowImage from '../../../public/images/arrow.svg';

type Props = {
    images: {
        preview: string;
    }[];
    thumbs?: boolean;
}

export function Carousel({ images, thumbs }: Props) {
    const [currentImage, setCurrentImage] = useState(0);
    const ref = useRef(null);
    const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' });

    function nextImage() {
        setCurrentImage(prev => prev >= images.length - 1 ? 0 : prev + 1);
    }

    function prevImage() {
        setCurrentImage(prev => prev <= 0 ? images.length - 1 : prev - 1);
    }


    return (
        <C.Container>
            <C.ControlsWrapperContainer>
                <C.ImageWrapper
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: .3,
                        delay: 0
                    }}
                >
                        <C.ImageContainer>
                            <Image src={images[currentImage].preview} objectFit="contain" alt="house image" layout="fill" />
                        </C.ImageContainer>
                </C.ImageWrapper>
                <C.ControlsContainer>
                    <C.Control direction="left" onClick={prevImage}><Image src={arrowImage} alt="arrow" width={30} height={40} /></C.Control>
                    <C.Control direction="right" onClick={nextImage}><Image src={arrowImage} alt="arrow" width={30} height={40} /></C.Control>
                </C.ControlsContainer>
            </C.ControlsWrapperContainer>

            {thumbs && <C.ThumbsWrapper ref={ref} onMouseDown={onMouseDown}>
                <C.ThumbsContainer>
                    {
                        images.map((image, i) => (
                            <C.Thumb
                                onClick={e => setCurrentImage(i)}
                                key={i}
                                isActive={currentImage === i}
                            >
                                <C.ThumbContainer>
                                    <Image draggable={false} src={image.preview} alt="house image" layout="fill" objectFit="contain" />
                                </C.ThumbContainer>
                            </C.Thumb>
                        ))
                    }
                </C.ThumbsContainer>
            </C.ThumbsWrapper>}
        </C.Container>
    )
}