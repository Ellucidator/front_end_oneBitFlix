import styles from "./styles.module.scss"
import { Container, Row, Col } from "reactstrap"

const PresentationSection= function (){
    return (
        <>
            <Container>
                <Row>
                    <Col md>
                        <p>ACESSO ILIMITADO</p>
                        <p>Tenha acesso aos melhores <br/> tutoriais de Programação</p>
                        <p>Estude de onde estiver, a qualquer momento, e continue <br/> evoluindo como programador </p>
                        <button type="button" className={`btn btn-outline-secondary`}>
                            ACESSE AGORA <img src="/buttonPlay.svg" alt="buttonImg"/>
                        </button>
                    </Col>
                    <Col md></Col>
                </Row>
            </Container>
        </>
    )
}

export default PresentationSection