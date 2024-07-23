

import style from './Stepbar.module.css';
import Point from './components/Point';


export default function Stepbar({screens, currentScreenId, scrollToScreen}){

    return (
        <div className={style.stepbar}>
            {screens.map((screen) => (
                screen.routeId < 10 ? <Point 
                nameScreen = {screen.name}
                isActive = {screen.routeId === currentScreenId}
                idScreen = {screen.routeId}
                scrollToScreen={scrollToScreen}/> : null
            ))}
        </div>
    )
}