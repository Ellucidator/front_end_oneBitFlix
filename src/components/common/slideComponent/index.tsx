'use client'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import SlideCard from '../slideCard';
import { CourseType } from '../../../services/courseService';

interface props {
    course: CourseType[]
}
const SlideComponent = function({course}:props){
    return(
        <>
            <div>
                <Splide options={{
                    type:"loop",
                    perPage:4,
                    perMove:1,
                    pagination:false,
                }}>
                    {course?.map((course)=>(
                        <SplideSlide key={course.id}>
                            <SlideCard course={course}/>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    )
}

export default SlideComponent