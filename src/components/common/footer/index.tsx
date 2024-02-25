import { Container } from 'reactstrap'
import styles from './styles.module.scss'


const Footer = function () {
    return (
        <>
            <Container className={styles.footer}>
                <img 
                src='/common-image/logoOnebitcode.svg'
                alt='logoFooter'
                className={styles.logoFooter}
                />
                <a href='https://onebitcode.com' target={"_blank"} className={styles.linkFooter}>
                    ONEBITCODE.COM
                </a>
            </Container>
        </>
    )
}

export default Footer