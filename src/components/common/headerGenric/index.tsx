import { Container } from 'reactstrap'
import styles from './styles.module.scss'
import Link from 'next/link'

const HeaderGeneric = function(){

    return(
        <>
            <div className={styles.header}>
                <Container className={styles.headerContainer}>
                    <Link href=''>
                        <img src='/logoOnebitflix.svg' alt='logoRegister' className={styles.headerLogo}/>
                    </Link>
                    <Link href=''>
                        <button type="button" className={`btn btn-outline-secondary ${styles.headerBtn}`}>
                            
                        </button>
                    </Link>
                </Container>
            </div>
        </>
    )
}


export default HeaderGeneric