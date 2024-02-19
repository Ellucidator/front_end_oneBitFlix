'use client'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import SlideCard from '../slideCard';
import { CourseType } from '@/types/courseTypes';

interface props{
    courses: CourseType[]
}
const SlideComponent = function({courses}:props){
    return(
        <>
            <div className='d-flex flex-column aign-items-center py-4'>
                <Splide options={{
                    type:"loop",
                    perPage:4,
                    perMove:1,
                    height:350,
                    pagination:false,
                }}>
                    {courses?.map((course)=>(
                        <SplideSlide className='d-flex align-items-center justify-content-center' key={course.id}>
                            <SlideCard course={course}/>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    )
}

export default SlideComponent