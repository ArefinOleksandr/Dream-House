import React, { useState } from 'react';
import style from './MainScreenOffer.module.css';
import animationScreen from '../../animationScreens/animationScreens.module.css'
import logo from '../../img/logo/slogan.svg'

const MainScreenOffer = ({ typeAnimation }) => {

  return (
    <div className={`${style.main_screen_offer} ${typeAnimation ==='PREV_SCREEN' ? animationScreen.slideFromTop : ''} ${typeAnimation ==='NEXT_SCREEN' ? animationScreen.slideFromBottom : ''}`
        + ' ' + `${typeAnimation === 'CURRENT_TO_TOP' ? animationScreen.slideToTop : ''}`
        + ' ' + `${typeAnimation === 'CURRENT_TO_BOTTOM' ? animationScreen.slideToBottom : ''}`}>
      
      <img className={style.logo} src={logo} alt="" />
    </div>
  );
};

export default MainScreenOffer;
