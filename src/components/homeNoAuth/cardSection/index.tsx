import { Container } from "reactstrap"
import style from "./style.module.scss"


const CardSection = function () {
    return (
        <>
            <p className={style.sectionTitle}>
                O QUE VOCÊ VAI ACESSAR
            </p>
            <Container className="d-flex flex-wrap justify-content-center pt-5 gap-5">
                <div className={style.card1}>
                    <p className={style.cardTitle}>
                        FRONT-END
                    </p>
                    <p className={style.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis esse tenetur eos laborum labore iusto libero magni illo sapiente porro quos rerum aspernatur,perferendis ratione earum debitis consectetur! Rem.
                    </p>
                </div>
                <div className={style.card2}>
                    <p className={style.cardTitle}>
                        BACK-END
                    </p>
                    <p className={style.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis esse tenetur eos laborum labore iusto libero magni illo sapiente porro quos rerum aspernatur,perferendis ratione earum debitis consectetur! Rem.
                    </p>
                </div>
                <div className={style.card3}>
                    <p className={style.cardTitle}>
                        MOBILE
                    </p>
                    <p className={style.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis esse tenetur eos laborum labore iusto libero magni illo sapiente porro quos rerum aspernatur,perferendis ratione earum debitis consectetur! Rem.
                    </p>
                </div>
                <div className={style.card4}>
                    <p className={style.cardTitle}>
                        GIT E GITHUB
                    </p>
                    <p className={style.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis esse tenetur eos laborum labore iusto libero magni illo sapiente porro quos rerum aspernatur,perferendis ratione earum debitis consectetur! Rem.
                    </p>
                </div>
                <div className={style.card5}>
                    <p className={style.cardTitle}>
                        PROJETOS
                    </p>
                    <p className={style.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis esse tenetur eos laborum labore iusto libero magni illo sapiente porro quos rerum aspernatur,perferendis ratione earum debitis consectetur! Rem.
                    </p>
                </div>
                <div className={style.card6}>
                    <p className={style.cardTitle}>
                        CAREIRA
                    </p>
                    <p className={style.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis esse tenetur eos laborum labore iusto libero magni illo sapiente porro quos rerum aspernatur,perferendis ratione earum debitis consectetur! Rem.
                    </p>
                </div>
            </Container>
        </>
    )
}

export default CardSection