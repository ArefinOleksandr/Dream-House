import React, { useEffect, useRef, useState } from 'react';
import smallLogo from '../../img/logo/smallLogo.svg';
import Instagram from '../../img/icons/Instagram.png';
import Telegram from '../../img/icons/Telegram.png';
import Facebook from '../../img/icons/Facebook.png';
import YouTube from '../../img/icons/YouTube.png';

import style from './Sidebar.module.css';

import Icon from './components/Icon';

export default function Sidebar() {
    const mainIconRef = useRef(null);
    const otherIconRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const lineRef = useRef(null);
    const textRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState([false, false, false, false]);
    const [isLineIntersecting, setIsLineIntersecting] = useState(false);
    const [isTextIntersecting, setIsTextIntersecting] = useState(false);
    const [icons, setIcons] = useState([Facebook, Instagram, Telegram, YouTube]);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        const mainIcon = mainIconRef.current;
        const line = lineRef.current;
        const text = textRef.current;

        function isIntersecting(elem1, elem2) {
            const rect1 = elem1.getBoundingClientRect();
            const rect2 = elem2.getBoundingClientRect();

            return !(
                rect1.top > rect2.bottom ||
                rect1.right < rect2.left ||
                rect1.bottom < rect2.top ||
                rect1.left > rect2.right
            );
        }

        function checkIntersection() {
            const newIntersections = otherIconRefs.map(ref => isIntersecting(mainIcon, ref.current));
            setIsIntersecting(newIntersections);

            if (isIntersecting(mainIcon, line)) {
                setIsLineIntersecting(true);
            }

            if (isIntersecting(mainIcon, text)) {
                setIsTextIntersecting(true);
            }

            requestAnimationFrame(checkIntersection);
        }

        checkIntersection();

        return () => cancelAnimationFrame(checkIntersection);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationClass(style.animation_small_logo);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={style.sidebar}>
            <div>
                <img ref={mainIconRef} id='mainIcon' className={animationClass + ' ' + style.mainIcon} src={smallLogo} alt="" />
                <span ref={textRef} className={isTextIntersecting ? style.showText : style.hideText}>ремонт квартир под ключ</span>
                <div ref={lineRef} className={`${style.line} ${isLineIntersecting ? style.expandLine : ''}`}></div>
                <div className={style.socialMedia}>
                    {otherIconRefs.map((ref, index) => (
                        <Icon key={index} src={icons[index]} ref={ref} id={`icon${index + 1}`} isIntersecting={isIntersecting[index]} />
                    ))}
                </div>
            </div>
        </div>
    );
}
