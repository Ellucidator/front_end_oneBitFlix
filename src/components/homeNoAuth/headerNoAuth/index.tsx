import { Button, Container } from 'reactstrap';
import style from './style.module.scss';
import Link from 'next/link';
const HeaderNoAuth = () => {
    return (
        <>
            <div className={style.ctaSection}>
                <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={style.imgCta} />
                <p>Se cadastre para ter acesso aos cursos</p>
                <img src="/homeNoAuth/logoCta.pnp" alt="logoCta" />
            </div>
            <Container className={style.nav} >
                <img src="/" alt="" className={style.imgLogoNav}/>
                <div>
                    <Link href="/login">
                        
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default HeaderNoAuth;