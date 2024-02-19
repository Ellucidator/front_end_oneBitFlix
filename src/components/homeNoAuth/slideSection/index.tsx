import styles from "./style.module.scss"
import { Container } from "reactstrap";
import SlideComponent from "@/components/common/slideComponent";
import { CourseType } from "@/types/courseTypes";
import Link from "next/link";

interface props{
    newestCourses: CourseType[]
}
const SlideSection = function ({newestCourses}:props) {
    return(
        <>
            <Container>
                <p className={styles.sectionTitle}>
                    AULAS JÁ DISPONIVEIS
                </p>
                <SlideComponent courses={newestCourses} />
                <Link href='/register' className="d-flex justify-content-center pb-5">
                    <button className={`${styles.slideSectionBtn} btn btn-outline-danger`} type="button">
                        Se cadastre para acessar!
                    </button>
                </Link>
            </Container>
        </>
    )
};

export default SlideSection