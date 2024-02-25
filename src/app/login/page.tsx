import HeaderGeneric from '@/components/common/headerGenric'
import styles from './page.module.scss'
import { Metadata } from 'next'
import { Container } from 'reactstrap'
import Footer from '@/components/common/footer'
import { authService, sessionService } from '@/service/authService'


export const metadata:Metadata = {
    title: "One Bit Flix - Login",
    description: "Generated by create next app",
}


const Login = async function () {

    const handleLogin =  async(formData: FormData) => {
        'use server'
        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()

        const res=  await authService.login({email, password})
        // console.log(res)
        // if(res.token){
        //     await sessionService.createSessionToken({
        //         email
        //     })
        // }

    }

    return (
        <>
            <main className={styles.main}>
                <HeaderGeneric logoUrl="/" btnUrl="/register" btnContent="Quero fazer cadastro"/>
                <Container className='py-5'>
                    <p className={styles.formTitle}>Bem vindo(a) de volta!</p>
                    <form action={handleLogin} className={`d-flex flex-column justify-content-center align-items-center gap-5  ${styles.form}`}>
                        <div className={`input-group ${styles.formGroup}`}>
                            <label htmlFor="email" className={`form-label ${styles.label}`}>EMAIL</label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                className={`form-control ${styles.input}`}
                            />
                        </div>
                        <div className={`input-group ${styles.formGroup}`}>
                            <label htmlFor="password" className={`form-label ${styles.label}`}>SENHA</label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                className={`form-control ${styles.input}`}
                            />
                        </div>
                        <button type="submit" className={`btn btn-outline-secondary ${styles.formBtn}`}>Entrar</button>
                    </form>
                </Container>
                <Footer/>
            </main>
        </>
    )
}

export default Login