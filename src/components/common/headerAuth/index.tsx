import { Container } from 'reactstrap'
import styles from './styles.module.scss'
import Link from 'next/link'



const HeaderAuth = function(){

    return(
        <>
            <Container className={styles.nav}>
                <Link href='/'>
                    <img src="common-image/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.headerLogo}/>
                </Link>
                <div className={styles.search}>
                    <form>
                        <input name='search' type="search" placeholder='Pesquisar' className={styles.input}/>
                    </form>
                    <img src="homeAuth/iconSearch.svg" alt="lupaHeader" className={styles.searchImage} />
                </div>
                <p className={styles.userProfile}>AB</p>
            </Container>
        </>
    )
}

export default HeaderAuth