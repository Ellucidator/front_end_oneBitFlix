import style from "./style.module.scss";
import { CourseType } from '../../../services/courseService';


interface props {
    course: CourseType
}

const SlideCard = function({course}:props){
    return(
        <>
            <div className={style.slide}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${course.thumbnailUrl}`} alt={course.name} className={style.slideImg} />
                <p className={style.slideTitle}>{course.name}</p>
                <p className={style.slideDescription}>{course.synopsis}</p>
            </div>
        </>
    )
}

export default SlideCard