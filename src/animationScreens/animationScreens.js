import style from './animationScreens.module.css'


export default function SlideScreenAnimation(idScreen, currentScreen){
    console.log(idScreen, currentScreen)
    if(idScreen < currentScreen){
        return style.slideFromTop
    }
}