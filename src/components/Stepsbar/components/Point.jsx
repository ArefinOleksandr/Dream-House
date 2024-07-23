import style from '../Stepbar.module.css';

export default function Point({nameScreen, isActive, idScreen, scrollToScreen}){
    
    const handleClick = () => {
        scrollToScreen(idScreen)
    }
    
    return (
        <>
        <div onClick={handleClick} className={ isActive ? style.point_border + ' ' +  style.active_point_border : style.point_border}>
            <div className={ isActive ? style.point + ' ' + style.active_point : style.point}>

            </div>
        </div>
        <div className={'uk-card uk-card-body uk-card-default ' + style.cardItem} data-uk-drop='mode: hover; pos: left-center'> {nameScreen}</div>
        
        </>
    )
}