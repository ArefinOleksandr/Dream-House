import RangeSlider from "./components/RangeSlider";
import style from './MainScreenCalculator.module.css'
import animationScreen from '../../animationScreens/animationScreens.module.css'

import { useEffect, useState } from "react";
import PackageSlider from "./components/PackageSlider";
import Counter from "./components/Counter";

export default function MainScreenCalculator({typeAnimation}){
    const [value, setValue] = useState(50);
    const [currentStage, setCurrentStage] = useState(1);
    const [currentCoef, setCurrentCoef] = useState(3640);
    const [stages] = useState([
        {
            title : 'Elite',
            id : 1
        },
        {
            title : 'Vip',
            id : 2
        },
        {
            title : 'Extra',
            id : 3
        }
    ])
    const [activeStage, setActiveStage] = useState('ELITE')
    console.log(activeStage)

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        switch(currentStage){
            case 1:
                setCurrentCoef(3640);
                break;
            case 2:
                setCurrentCoef(5640);
                break;
            case 3:
                setCurrentCoef(7390);
                break;
            default:
                break;
        }
    }, [currentStage])

    return (
        <div className=
    {
        `${style.main_screen_calculator} ${typeAnimation ==='PREV_SCREEN' ? animationScreen.slideFromTop : ''}${typeAnimation ==='NEXT_SCREEN' ? animationScreen.slideFromBottom : ''}`
        + ' ' + `${typeAnimation === 'CURRENT_TO_TOP' ? animationScreen.slideToTop : ''}`
        + ' ' + `${typeAnimation === 'CURRENT_TO_BOTTOM' ? animationScreen.slideToBottom : ''}`
    }>
        <div className={style.container_calculate}>
            <div>
                <RangeSlider value={value} onChange={handleChange} min={15} max={200}/>
                {stages.map((stage) => (
                    <PackageSlider 
                        title={stage.title} 
                        stageId={stage.id} 
                        currentStageId={currentStage} 
                        setCurrentStage={setCurrentStage} 
                        isActiveLine={stage.id <= currentStage}/>
                ))}
                <Counter sum={value * currentCoef}/> 
            </div>
            
            
            
        </div>
        
    </div>
    )
}