'use client'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import SlideCard from '../slideCard';
import { CourseType } from '@/types/courseTypes';

interface props {
    courses: CourseType[]
}
const SlideComponent = function ({ courses }: props) {

    let slideCount = 0

    if (courses?.length > 4) {
        slideCount = 4
    } else {
        slideCount = courses?.length
    }

    return (
        <>
            <div className='d-flex flex-column aign-items-center py-4'>
                <Splide options={{
                    type: "loop",
                    perPage: slideCount,
                    perMove: slideCount,
                    height: 350,
                    pagination: false,
                    arrows: courses.length > 4 ? true : false,
                    drag: slideCount > 4 ? true : false,
                    breakpoints: {
                        1400: {
                            perPage: slideCount < 4 ? slideCount : 3,
                            perMove: slideCount < 4 ? slideCount : 3,
                            arrows: courses.length > 3 ? true : false,
                            drag: slideCount > 3 ? true : false,
                        },
                        1000: {
                            perPage: slideCount < 4 ? slideCount : 2,
                            perMove: slideCount < 4 ? slideCount : 2,
                            arrows: courses.length > 2 ? true : false,
                            drag: slideCount > 3 ? true : false,
                        },
                        768: {
                            perPage: 1,
                            perMove: 1,
                            arrows: courses.length > 1 ? true : false,
                            drag: slideCount > 1 ? true : false,
                        }
                    }
                }}>
                    {courses?.map((course) => (
                        <SplideSlide className='d-flex align-items-center justify-content-center' key={course.id}>
                            <SlideCard course={course} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    )
}

export default SlideComponent