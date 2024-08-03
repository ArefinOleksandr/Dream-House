import { useEffect, useState } from "react"
import style from '../MainScreenCalculator.module.css'


export default function Counter ({sum}) {
    const [thousands, setThousands] = useState(Math.floor(sum/1000));
    const [hundreds, setHundreds] = useState(sum.toString().substr(-3, 3));
    const [isAnimation, setIsAnimation] = useState(false);


    useEffect(() => {
        setIsAnimation(true);
        setTimeout(() => {
            setIsAnimation(false)
            setThousands(Math.floor(sum/1000))
            setHundreds(sum.toString().substr(-3, 3))
        }, 500)
        
    }, [sum])

    return (
        <h1 className={style.calculate_sum}>
            <span className={`${style.calculate_sum_thousands} ${isAnimation ? style.transform_out : style.transform_in}`}>{thousands} </span>
            <span className={`${style.calculate_sum_hundreds} ${isAnimation ? style.transform_out : style.transform_in}`}>{hundreds} </span>
            грн
        </h1>
    )
}