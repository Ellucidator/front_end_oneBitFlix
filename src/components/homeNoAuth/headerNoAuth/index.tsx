import {Container } from 'reactstrap';
import style from './style.module.scss';
import Link from 'next/link';
const HeaderNoAuth = () => {
    return (
        <>
            <Container className={style.nav} >
                <img src="common-image/logoOnebitflix.svg" alt="logoOnebitflix" className={style.imgLogoNav}/>
                <div>
                    <Link href="/login">
                        <button type="button" className={`btn btn-outline-secondary ${style.navBtn}`}>
                            Entrar
                        </button>
                    </Link>
                    <Link href="/login">
                        <button type="button" className={`btn btn-outline-secondary ${style.navBtn}`}>
                            Quero fazer parte
                        </button>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default HeaderNoAuth;