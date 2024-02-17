import { CourseType } from "@/services/courseService"
import styles from "./style.module.scss"
import { Container } from "reactstrap";
import SlideComponent from "@/components/common/slideComponent";

interface props {
    newestCourses: CourseType[]
}

const SlideSection = function ({newestCourses}:props){
    return(
        <>
            <Container>
                <p className={styles.sectionTitle}>
                    AULAS JÁ DISPONIVEIS
                </p>
                <SlideComponent courses={newestCourses} />
                <button>Se cadastre agora</button>
            </Container>
        </>
    )
};

export default SlideSection