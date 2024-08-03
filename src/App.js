import React, { useState, useEffect } from 'react';
import MainScreenOffer from './screens/MainScreenOffer/MainScreenOffer';
import MainScreenAboutUs from './screens/MainScreenAboutUs/MainScreenAboutUs';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Stepbar from './components/Stepsbar/Stepbar';
import MainScreenServices from './screens/MainScreenServices/MainScreenServices';
import MainScreenCalculator from './screens/MainScreenCalculator/MainScreenCalculator';

let Router = [
  {
    routeId: 1,
    screen: MainScreenOffer,
    name: 'Главная страница',
    isAnimated: false
  },
  {
    routeId: 2,
    screen: MainScreenAboutUs,
    name: 'О нас',
    isAnimated: false
  },
  {
    routeId: 3,
    screen: MainScreenServices,
    name: 'Услуги',
    isAnimated: false
  },
  {
    routeId: 4,
    screen: MainScreenCalculator,
    name: 'Цены',
    isAnimated: false
  },
]

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [targetScreen, setTargetScreen] = useState(null)
  const [scrollDirection, setScrollDirection] = useState(null)

  const handleWheel = (event) => {
    let delta = event.deltaY;
    if (delta > 0 && currentScreen < Router.length) {
      handleChangeScreen(currentScreen + 1, 'DOWN');
    } else if (delta < 0 && currentScreen > 1) {
      handleChangeScreen(currentScreen - 1, 'UP');
    }
  }

  const handleChangeScreen = (target, direction) => {
    setTargetScreen(target);
    setScrollDirection(direction);
    setTimeout(() => {
      setCurrentScreen(target);
      setTargetScreen(null);
      setScrollDirection(null);
    }, 700);
  }

  useEffect(() => {
    document.addEventListener('wheel', handleWheel);
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [currentScreen])

  useEffect(() => {
    Router.map((route) => {
      if (route.routeId === currentScreen) {
        route.isAnimated = true;
      }
    })
  }, [currentScreen])

  const CurrentScreenComponent = Router.find(route => route.routeId === currentScreen)?.screen;
  const TargetScreenComponent = Router.find(route => route.routeId === targetScreen)?.screen;

  const handleScrollByStepbar = (customScreen) => {
    if (customScreen > currentScreen) {
      handleChangeScreen(customScreen, 'DOWN');
    } else if (customScreen < currentScreen) {
      handleChangeScreen(customScreen, 'UP');
    }
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <Sidebar />
      <Form isVisible={currentScreen === 3 ? false : true}/>
      <Stepbar screens={Router} currentScreenId={currentScreen} scrollToScreen={handleScrollByStepbar} />
      {CurrentScreenComponent ? (
        <>
          {scrollDirection === 'UP' && TargetScreenComponent && <TargetScreenComponent typeAnimation='PREV_SCREEN' />}
          <CurrentScreenComponent isAnimated={Router.find(route => route.routeId === currentScreen)?.isAnimated} typeAnimation={scrollDirection === 'UP' ? 'CURRENT_TO_BOTTOM' : scrollDirection === 'DOWN' ? 'CURRENT_TO_TOP' : ''} />
          {scrollDirection === 'DOWN' && TargetScreenComponent && <TargetScreenComponent typeAnimation='NEXT_SCREEN' />}
        </>
      ) : (
        <div>Screen not found</div>
      )}
    </div>
  );
};

export default App;
