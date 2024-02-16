'use client'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import SlideCard from '../slideCard';

const SlideComponent = function(){
    return(
        <>
            <div>
                <Splide options={{
                    type:"loop",
                    perPage:4,
                    perMove:1,
                    pagination:false,
                }}>
                    <SplideSlide>
                        <SlideCard/>
                    </SplideSlide>
                </Splide>
            </div>
        </>
    )
}

export default SlideComponent