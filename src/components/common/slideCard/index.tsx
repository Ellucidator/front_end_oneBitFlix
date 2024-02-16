import style from "./style.module.scss"

const SlideCard = function(){
    return(
        <>
            <div className={style.slide}>
                <img src="" alt="" className={style.slideImg} />
                <p className={style.slideTitle}></p>
                <p className={style.slideDescription}></p>
            </div>
        </>
    )
}

export default SlideCard