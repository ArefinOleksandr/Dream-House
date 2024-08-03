import animationScreen from '../../animationScreens/animationScreens.module.css'
import React, { useEffect, useState } from 'react';
import arrowIconGray from '../../img/icons/grayArrow.png'
import arrowIcon from '../../img/icons/Arrow.png'
import style from './MainScreenServices.module.css'

function Section({children, title, setActiveSection, activeSection, sectionId}) {
    const isActive = activeSection === sectionId;
    const [isFading, setIsFading] = useState(false);
    const [shouldRenderContent, setShouldRenderContent] = useState(false);

    useEffect(() => {
      let timer;
      if (isActive) {
        timer = setTimeout(() => setShouldRenderContent(true), 500); // Задержка перед отображением содержимого
      } else {
        setShouldRenderContent(false);
      }
      return () => clearTimeout(timer);
    }, [isActive]);


    const handleClick = () => {
        
      if (isActive) {
        setIsFading(true);
        setTimeout(() => {
          setActiveSection(null);
          setIsFading(false);
        }, 500); // Время задержки перед исчезновением
      } else {
        setActiveSection(sectionId);
        
      }
      console.log(isActive, isFading)
    };
    console.log(isActive, isFading)
    return (
        <div className={`${style[title + '_container']} ${isActive ? style.active_section : ''}`} onClick={handleClick}>
            <h1 className={`${isActive && !isFading ? style.head_anim_off : '' } ${isFading ? style.head_anim_on : ''}`}>
                {title}
            </h1>
            {isActive && shouldRenderContent && <div className={` ${style.children_block} ${isFading ?  style.fadeout_animation : style.fade_animation}`}>{children}</div>}
        </div>
    )
}

export default function MainScreenServices({typeAnimation}){
    const [screenId] = useState(2); 
    const [activeSection, setActiveSection] = useState(null)

    return (
        <div className=
    {
        `${style.main_screen_services} ${typeAnimation ==='PREV_SCREEN' ? animationScreen.slideFromTop : ''}${typeAnimation ==='NEXT_SCREEN' ? animationScreen.slideFromBottom : ''}`
        + ' ' + `${typeAnimation === 'CURRENT_TO_TOP' ? animationScreen.slideToTop : ''}`
        + ' ' + `${typeAnimation === 'CURRENT_TO_BOTTOM' ? animationScreen.slideToBottom : ''}`
    }>
        <Section
            title={'elite'}
            sectionId={'elite'}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
        >
            <div>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </h2>
                <button className={style.galery_button}>
                    Галерея
                    <div className={style.arrow}>
                        <div className={style.line}>

                        </div>
                        <img src={arrowIcon} alt="" />
                    </div>
                </button>
                <button className={style.service_button}>
                    Список услуг
                    <div className={style.arrow}>
                        <div className={style.line}>

                        </div>
                        <img src={arrowIconGray} alt="" />
                    </div>
                </button>
            </div>
        </Section>
        <Section
            title={'vip'}
            sectionId={'vip'}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
        >
            <div>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </h2>
                <button className={style.galery_button}>
                    Галерея
                    <div className={style.arrow}>
                        <div className={style.line}>

                        </div>
                        <img src={arrowIcon} alt="" />
                    </div>
                </button>
                <button className={style.service_button}>
                    Список услуг
                    <div className={style.arrow}>
                        <div className={style.line}>

                        </div>
                        <img src={arrowIconGray} alt="" />
                    </div>
                </button>
            </div>
        </Section>
        <Section
            title={'extra'}
            sectionId={'extra'}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
        >
            <div>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </h2>
                <button className={style.galery_button}>
                    Галерея
                    <div className={style.arrow}>
                        <div className={style.line}>

                        </div>
                        <img src={arrowIcon} alt="" />
                    </div>
                </button>
                <button className={style.service_button}>
                    Список услуг
                    <div className={style.arrow}>
                        <div className={style.line}>

                        </div>
                        <img src={arrowIconGray} alt="" />
                    </div>
                </button>
            </div>
        </Section>
    </div>
    )
}