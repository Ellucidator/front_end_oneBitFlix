import { Container } from 'reactstrap'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image';

interface props{
    logoUrl:string;
    btnUrl:string;
    btnContent:string;
}
const HeaderGeneric = function({logoUrl,btnUrl,btnContent}:props){

    return(
        <>
            <div className={styles.header}>
                <Container className={styles.headerContainer}>
                    <Link href={logoUrl}>
                        <Image src='/common-image/logoOnebitflix.svg' alt='logoRegister' className={styles.headerLogo} width={200} height={50}/>
                    </Link>
                    <Link href={btnUrl}>
                        <button type="button" className={`btn btn-outline-secondary ${styles.headerBtn}`}>
                            {btnContent}
                        </button>
                    </Link>
                </Container>
            </div>
        </>
    )
}


export default HeaderGeneric