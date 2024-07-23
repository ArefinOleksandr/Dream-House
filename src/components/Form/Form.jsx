import { useState } from "react"
import style from './Form.module.css';
import arrowIcon from '../../img/icons/Arrow.png'

export default function Form(){
    const [userPhone, setUserPhone] = useState(null)
    const [userName, setUserName] = useState(null)

    const handleChangeName = (event) => {
        setUserName(event.target.value);
    }
    const handleChangePhone = (event) => {
        setUserPhone(event.target.value);
    }

    return (
        <form className={style.form} action="">
            <input 
            className="uk-input" 
            type="text" 
            aria-label="Ваше имя" 
            placeholder="Ваше имя"
            value={userName}
            onChange={handleChangeName}
            />
            <input 
            className="uk-input" 
            type="text" 
            aria-label="Ваш телефон" 
            placeholder="Ваш телефон"
            value={userPhone}
            onChange={handleChangePhone}
            />
            <button>
                Обсудить проект 
                <div className={style.arrow}>
                    <div className={style.line}>

                    </div>
                    <img src={arrowIcon} alt="" />
                </div>
            </button>
        </form>
    )
}