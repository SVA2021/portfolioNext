import React, {FC, useEffect, useState} from 'react';
import s from './Gallery.module.scss';
import cn from "classnames";
import {useTranslation} from "next-i18next";

export type GalleryPropsT = {
    imgList: string[]
}

export const Gallery: FC<GalleryPropsT> = ({imgList}) => {

    const {t} = useTranslation('gallery');
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    const [isSlideShow, setIsSlideShow] = useState<boolean>(false);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slideShowDelay = 3000;

    const showNextSlide = () => setCurrentSlide(() => currentSlide === imgList.length - 1 ? 0 : currentSlide + 1);
    const showPrevSlide = () => setCurrentSlide(() => currentSlide === 0 ? imgList.length - 1 : currentSlide - 1);
    const toggleFullScreen = () => setIsFullScreen(() => !isFullScreen);
    const toggleSlideShow = () => setIsSlideShow(() => !isSlideShow);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isSlideShow) return false;
            showNextSlide();
        }, slideShowDelay);
        return () => clearInterval(interval);
    }, [isSlideShow, currentSlide])

    return (
        <div className={cn(s.gallery, isFullScreen && s.showFull)}>
            <div className={s.gallery__navigation}>
                <button className={s.gallery__btn} onClick={() => showPrevSlide()}>{t('prev')}</button>
                <button className={cn(s.gallery__btn, isFullScreen && s.gallery__btn__active)}
                        onClick={() => toggleFullScreen()}>
                    {t('fullscreen')}
                </button>
                <button className={cn(s.gallery__btn, isSlideShow && s.gallery__btn__active)}
                        onClick={() => toggleSlideShow()}>
                    {t('slideshow')}{isSlideShow}
                </button>
                <button className={s.gallery__btn} onClick={() => showNextSlide()}>{t('next')}</button>
            </div>
            <img className={s.gallery__img} src={imgList[currentSlide]} alt={t('imgAlt')}
                 onClick={() => setIsFullScreen(!isFullScreen)}/>
        </div>
    );
};