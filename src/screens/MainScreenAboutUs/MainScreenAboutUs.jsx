import React, { useEffect, useState } from 'react';
import style from './MainScreenAboutUs.module.css';
import animationScreen from '../../animationScreens/animationScreens.module.css'

const MainScreenAboutUs = ({ typeAnimation }) => {
  const [screenId] = useState(1); 
 

  return (
    <div className=
    {
        `${style.main_screen_about_us} ${typeAnimation ==='PREV_SCREEN' ? animationScreen.slideFromTop : ''}${typeAnimation ==='NEXT_SCREEN' ? animationScreen.slideFromBottom : ''}`
        + ' ' + `${typeAnimation === 'CURRENT_TO_TOP' ? animationScreen.slideToTop : ''}`
        + ' ' + `${typeAnimation === 'CURRENT_TO_BOTTOM' ? animationScreen.slideToBottom : ''}`
    }>
      <h2>Элитный ремонт вашей квартиры</h2>
      <div className={style.info_blocks}>
        <div>
          <h1>18</h1>
          <span>Лет на рынке</span>
        </div>
        <div>
          <h1>237</h1>
          <span>Реализованых проектов</span>
        </div>
        <div>
          <h1>50</h1>
          <span>Сотрудников</span>
        </div>
      </div>
      <button className={style.button_about_us}>Подробнее о нас</button>
    </div>
  );
};

export default MainScreenAboutUs;
