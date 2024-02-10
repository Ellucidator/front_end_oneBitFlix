import style from './style.module.scss';

const HeaderNoAuth = () => {
    return (
        <>
            <div className={style.ctaSection}>
                <img src="/homeNoAuth/iconSearch.svg" alt="logoCta" className={style.imgCta} />
                <p>Se cadastre para ter acesso aos cursos</p>
            </div>
        </>
    );
};

export default HeaderNoAuth;