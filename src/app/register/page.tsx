import Footer from '@/components/common/footer'
import styles from './page.module.scss'
import HeaderGeneric from "@/components/common/headerGenric"
import Head from "next/head"
import { Container} from "reactstrap"
import { authService } from '@/service/authService'
import { Metadata } from 'next'

export const metadata:Metadata = {
    title: "One Bit Flix - Cadastro",
    description: "Generated by create next app",
}
const Register = function () {

    const handleRegister =  async(formData: FormData) => {
        'use server'
        const firstName = formData.get('firstName')!.toString()
        const lastName = formData.get('lastName')!.toString()
        const phone = formData.get('phone')!.toString()
        const birth = formData.get('birth')!.toString()
        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()
        console.log({firstName,lastName,phone,birth,email,password})

        await authService.register({firstName,lastName,phone,birth,email,password})

    }

    return (
        <>
            <main className={styles.main}>
                <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login" />
                <Container className="py-5">
                    <p className={styles.formTitle}>Bem vindo(a) a OneBitFlix</p>
                    <form action={handleRegister} className={`d-flex flex-column justify-content-center align-items-center gap-5  ${styles.form}`}>
                        <p className='text-center'><strong>Faça a sua conta</strong></p>
                        <div className={`input-group`}>
                            <label htmlFor="firstName" className={`form-label ${styles.label}`}>NOME</label>
                            <input
                                id='firstName'
                                name='firstName'
                                type='text'
                                placeholder='Seu nome'
                                required maxLength={20}
                                className={`form-control ${styles.input}`}
                            />
                        </div>
                        <div className={`input-group`}>
                            <label htmlFor="lastName" className={`form-label ${styles.label}`}>SOBRENOME</label>
                            <input
                                id='lastName'
                                name='lastName'
                                type='text'
                                placeholder='Seu sobrenome'
                                required
                                className={`form-control ${styles.input}`}
                            />
                        </div>
                        <div className={`input-group`}>
                            <label htmlFor="phone" className={`form-label ${styles.label}`}>TELEFONE</label>
                            <input
                                id='phone'
                                name='phone'
                                type='tel'
                                placeholder='(xx) 9 xxxx-xxxx'
                                required
                                className={`form-control ${styles.input}`}
                            />
                        </div>
                        <div className={`input-group`}>
                            <label htmlFor="email" className={`form-label ${styles.label}`}>E-MAIL</label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='asWbA@example.com'
                                required maxLength={20}
                                className={`form-control ${styles.input}`}
                            />
                        </div>
                        <div className={`input-group`}>
                            <label htmlFor="birth" className={`form-label ${styles.label}`}>DATA DE NASCIMENTO</label>
                            <input
                                id='birth'
                                name='birth'
                                type='date'
                                min='1900-01-01'
                                max='2024-02-01'
                                required
                                className={`form-control ${styles.input}`}
                            />

                        </div>
                        <div className={`input-group`}>
                            <label htmlFor="password" className={`form-label ${styles.label}`}>SENHA</label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                placeholder='Digite sua senha (Min: 6 | Max: 20)'
                                minLength={6}
                                required maxLength={20}
                                className={`form-control ${styles.input}`}
                            />
                        </div>
                        <div className={`input-group`}>
                            <label htmlFor="passwordConfirm" className={`form-label ${styles.label}`}>CONFIRME SUA SENHA</label>
                            <input
                                id='passwordConfirm'
                                name='passwordConfirm'
                                type='password'
                                placeholder='Confirme sua senha'
                                minLength={6}
                                required maxLength={20}
                                className={`form-control ${styles.input}`}
                            />
                        </div>
                            <button type="submit" className={`btn btn-outline-secondary ${styles.formBtn}`}>
                                Cadastrar
                            </button>
                    </form>
                </Container>
                <Footer />
            </main>
        </>
    )
}

export default Register