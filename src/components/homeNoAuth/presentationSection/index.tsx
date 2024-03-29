import Link from "next/link"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "reactstrap"

const PresentationSection= function (){
    return (
        <>
            <Container className="py-4 mt-5">
                <Row>
                    <Col md className="d-flex flex-column justify-content-center">
                        <p className={styles.subTitle}>ACESSO ILIMITADO</p>
                        <p className={styles.title}>
                            Tenha acesso aos melhores <br/> tutoriais de Programação
                        </p>
                        <p className={styles.description}>
                            Estude de onde estiver, a qualquer momento, e continue evoluindo como programador
                        </p>
                        <Link href="/register">
                            <button type="button" className={`btn btn-outline-secondary ${styles.btnCta}`}>
                                ACESSE AGORA <img src="/common-image/buttonPlay.svg" alt="buttonImg" className={styles.btnImg}/>
                            </button>
                        </Link>
                    </Col>
                    <Col md>
                        <img src="/homeNoAuth/imgPresentation.png" alt="imgIndex" className={styles.imgPresentation} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center pt-5">
                        <img src="/homeNoAuth/iconArrowDown.svg" alt="arrowDown" className={styles.arrowDown}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PresentationSection