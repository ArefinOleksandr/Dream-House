import React, { useEffect, useState } from 'react';
import style from './MainScreenAboutUs.module.css';
import animationScreen from '../../animationScreens/animationScreens.module.css'
import Timer from './component/Timer';

import arrowIcon from '../../img/icons/grayArrow.png'

const MainScreenAboutUs = ({ typeAnimation, isAnimated }) => {
  const [screenId] = useState(1); 
  
  console.log('Is Animated = ' + isAnimated)

  
 

  return (
    <div className=
    {
        `${style.main_screen_about_us} ${typeAnimation ==='PREV_SCREEN' ? animationScreen.slideFromTop : ''}${typeAnimation ==='NEXT_SCREEN' ? animationScreen.slideFromBottom : ''}`
        + ' ' + `${typeAnimation === 'CURRENT_TO_TOP' ? animationScreen.slideToTop : ''}`
        + ' ' + `${typeAnimation === 'CURRENT_TO_BOTTOM' ? animationScreen.slideToBottom : ''}`
    }>
      <Timer isAnimated={isAnimated} seconds={1300} initialStyle={style.text_none_animated} finalStyle={style.text_animation}>
        <h2 >Элитный ремонт вашей квартиры</h2>
      </Timer>
     
      <div className={style.info_blocks}>
        <div>
          <div className={style.overlay_animation}>
            <Timer isAnimated={isAnimated} seconds={600} initialStyle={style.text_none_animated} finalStyle={style.numbers_animation}>
              <h1>18</h1>
            </Timer>
          </div>
          <Timer isAnimated={isAnimated} seconds={700} initialStyle={style.text_none_animated} finalStyle={style.text_animation}>
          <span>Лет на рынке</span>
          </Timer>
        </div>
        <div>
          <div className={style.overlay_animation}>
            <Timer isAnimated={isAnimated} seconds={800} initialStyle={style.text_none_animated} finalStyle={style.numbers_animation}>
              <h1>237</h1>
            </Timer>
            
          </div>
          <Timer isAnimated={isAnimated} seconds={900} initialStyle={style.text_none_animated} finalStyle={style.text_animation}>
          <span>Реализованых проектов</span>
          </Timer>
        </div>
        <div>
          <div className={style.overlay_animation}>
            <Timer isAnimated={isAnimated} seconds={1000} initialStyle={style.text_none_animated} finalStyle={style.numbers_animation}>
              <h1>50</h1>
            </Timer>
          </div>
          <Timer isAnimated={isAnimated} seconds={1100} initialStyle={style.text_none_animated} finalStyle={style.text_animation}>
          <span>Сотрудников</span>
          </Timer>
        </div>
      </div>
      <Timer isAnimated={isAnimated} seconds={1300} initialStyle={style.button_none_animated} finalStyle={style.button_animation}>
        <div className={style.button_overlay}>
          <button className={style.button_about_us}>
            Подробнее о нас
            <div className={style.arrow}>
              <div className={style.line}>

              </div>
              <img src={arrowIcon} alt="" />
            </div>
            </button>
        </div>
      </Timer>
      
      
    </div>
  );
};

export default MainScreenAboutUs;
