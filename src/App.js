import React, { useRef, useState, useEffect } from 'react';
import MainScreenOffer from './screens/MainScreenOffer/MainScreenOffer';
import MainScreenAboutUs from './screens/MainScreenAboutUs/MainScreenAboutUs';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Stepbar from './components/Stepsbar/Stepbar';


const Router = [
  {
    routeId : 1,
    screen : MainScreenOffer,
    name: 'Главная страница'
  },
  {
    routeId : 2,
    screen : MainScreenAboutUs,
    name : 'О нас'
  },
]

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [scrollToTop, setScrollToTop] = useState(false)
  const [scrollToBottom, setScrollToBottom] = useState(false)
  const [countScreens] = useState(Router.map((router) => router.routeId < 10 ? router : null))

  const handleWheel = (event, customScroll, customScreen) => {
    let delta = null
    if(event){
      delta = event.deltaY
    }

    if(
      ((customScreen && customScroll) && customScreen > currentScreen) ||
      (delta > 0 && currentScreen < countScreens.length && (!scrollToBottom || !scrollToTop)
    )){
      setScrollToBottom(true);

      setTimeout(() => {
        if(event){
          setCurrentScreen(currentScreen + 1 )
        }
        else if(customScreen, customScroll){
          setCurrentScreen(customScreen)
        }
        setScrollToBottom(false)
      }, 700)

    }
    
    else if(
      ((customScreen && customScroll) && customScreen < currentScreen) ||
      (delta < 0 && currentScreen > 1 && (!scrollToBottom || !scrollToTop))
    ){
      setScrollToTop(true)
      setTimeout(() => {
        if(event){
          setCurrentScreen(currentScreen - 1 )
        }
        else if(customScreen, customScroll){
          setCurrentScreen(customScreen)
        }
        setScrollToTop(false)
      }, 700)
    }
  }

  useEffect(() => {

    document.addEventListener('wheel', handleWheel)
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [currentScreen])
  
  const CurrentScreenComponent = Router.find(route => route.routeId === currentScreen)?.screen;
  const NextScreenComponent = Router.find(route => route.routeId === currentScreen + 1)?.screen;
  const PrevScreenComponent = Router.find(route => route.routeId === currentScreen - 1)?.screen;

  const handleScrollByStepbar = (customScreen) => {
    handleWheel(null, true, customScreen)
  }
  return (
    <div style={{overflow: 'hidden'}}>
      <Navbar />
      <Sidebar />
      <Form />
      <Stepbar screens = {Router} currentScreenId={currentScreen} scrollToScreen={handleScrollByStepbar}/>
      {CurrentScreenComponent ? (
        <>
          {scrollToTop && <PrevScreenComponent typeAnimation = 'PREV_SCREEN' />}
          <CurrentScreenComponent typeAnimation={scrollToTop ? 'CURRENT_TO_BOTTOM' : scrollToBottom ? 'CURRENT_TO_TOP': ''}/>
          {scrollToBottom && <NextScreenComponent typeAnimation = 'NEXT_SCREEN'/>}
          
        </>
      ) : (
        <div>Screen not found</div>
      )}
    </div>
  );
  

};

export default App;
