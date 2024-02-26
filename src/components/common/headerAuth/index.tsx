'use client'
import { Container } from 'reactstrap'
import styles from './styles.module.scss'
import Link from 'next/link'
import Modal from 'react-modal'
import { useState } from 'react'


const HeaderAuth = function () {

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Container className={styles.nav}>
                <Link href='/'>
                    <img src="common-image/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.headerLogo} />
                </Link>
                <div className='d-flex gap-3'>
                    <div className={styles.search}>
                        <form>
                            <input name='search' type="search" placeholder='Pesquisar' className={styles.input} />
                        </form>
                        <img src="homeAuth/iconSearch.svg" alt="lupaHeader" className={styles.searchImage} />
                    </div>
                    <p onClick={openModal} className={styles.userProfile}>AB</p>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className={styles.modal}
                    shouldCloseOnEsc={true}
                    overlayClassName={styles.modalOverlay}
                >
                    <Link href="/profile">
                        <p className={styles.modalLink}>Meus Dados</p>
                    </Link>
                    <p className={styles.modalLink}>Sair</p>
                </Modal>
            </Container>
        </>
    )
}

export default HeaderAuth