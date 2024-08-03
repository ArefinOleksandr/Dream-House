import style from '../MainScreenCalculator.module.css'

import { useEffect, useRef, useState } from 'react';


export default function PackageSlider({title, stageId, currentStageId, setCurrentStage, isActiveLine}){
    const titleRef = useRef(null);
    const [marginRight, setMarginRight] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const animateRef = useRef(null);
    const vwToPx = (vw) => (vw / 100) * window.innerWidth;

    useEffect(() => {
        if (titleRef.current) {
            console.log(titleRef.current.offsetWidth + ' / 2 - ' + vwToPx(1.0415) )
        const offset = (titleRef.current.offsetWidth / 2) - vwToPx(1.0415);
        setMarginRight(-offset);
        }
    }, []);
    useEffect(() => {
        stageId === currentStageId ? setIsActive(true) : setIsActive(false);
        
    }, [currentStageId])
    useEffect(() => {
        if (animateRef.current) {
            animateRef.current.beginElement();
        }
    }, [isActive])

    const handleClick = () => {
        setCurrentStage(stageId);
    }
    

    return (
        <div className={style.stageLine}>
            <h2 onClick={handleClick} id={`${title}-id`} ref={titleRef} style={{marginRight: `${marginRight}px`,cursor:'pointer', color: `${isActive ? '#ffa500' : '#fff'}`}}>
                {title}
            </h2>
            <svg  width={'6.615vw'} height={'2.455vw'} viewBox="0 0 6.615vw 2.183vw">
                <line x1={'0'} x2={'4.167vw'} y1={'1.0415vw'} y2={'1.0415vw'} stroke={isActiveLine ? '#ffa500' : '#ffffff60'}/>
                <circle onClick={handleClick} style={{cursor: 'pointer'}}  cx={'5.365vw'} cy={'1.0415vw'} r={'.208vw'} fill={isActiveLine ? '#ffa500' : '#ffffff60'}/>
                <circle  cx={'5.365vw'} cy={'1.0415vw'} fill="transparent" stroke={isActiveLine ? '#ffa500' : '#ffffff60'} strokeWidth={1} >
                    {isActive ? 
                    (<animate 
                        ref={animateRef}
                        attributeName="r"
                        from="0vw"
                        to="1.0415vw"
                        dur=".2s"
                        begin="indefinite"
                        fill="freeze"
                    />)
                    :
                    (<animate 
                        ref={animateRef}
                        attributeName="r"
                        from="1.0415vw"
                        to="0vw"
                        dur=".2s"
                        begin="indefinite"
                        fill="freeze"
                    />)
                    }
                </circle>
            </svg>
        </div>
    )
}