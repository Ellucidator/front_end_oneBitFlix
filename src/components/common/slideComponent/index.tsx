'use client'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import SlideCard from '../slideCard';
import { CourseType } from '../../../services/courseService';

interface props {
    courses: CourseType[]
}
const SlideComponent = function({courses}:props){
    return(
        <>
            <div>
                <Splide options={{
                    type:"loop",
                    perPage:4,
                    perMove:1,
                    pagination:false,
                }}>
                    {courses?.map((course)=>(
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