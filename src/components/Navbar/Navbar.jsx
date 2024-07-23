import { useEffect, useState } from 'react';
import callIcon from '../../img/icons/callIcon.svg';
import menuIcon from '../../img/icons/menu.png';
import style from './style/Navbar.module.css';

export default function Navbar() {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (!isAnimated) {
            setTimeout(() => {
                setIsAnimated(true);
            }, 1500);
        }
    }, [isAnimated]);

    return (
        <nav className={`${style.navbar} ${isAnimated ? style.navbar_animate : style.navbar_not_animate}`}>
            <div>
                <div>
                    <button className={style.menuIcon}>
                        <img src={menuIcon} alt="" />
                    </button>
                    <a className={style.underline} href="tel:+380979877888">
                        +38 (097) 987 78 88
                    </a>
                </div>
                <button className={style.callButton}>
                    <span className={style.underline}>Заказать звонок</span>
                    <div>
                        <img src={callIcon} alt="" />
                    </div>
                </button>
            </div>
        </nav>
    );
}
