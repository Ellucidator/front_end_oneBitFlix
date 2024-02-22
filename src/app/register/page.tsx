'use client'
import Footer from '@/components/common/footer'
import styles from './page.module.scss'
import HeaderGeneric from "@/components/common/headerGenric"
import Head from "next/head"
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { FormEvent } from 'react'
// import { authService } from '@/service/authService'
// import { RegisterType } from '@/types/registerTypes'


const Register = function () {
    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const firstName = formData.get('firstName')!.toString()
        const lastName = formData.get('lastName')!.toString()
        const phone = formData.get('phone')!.toString()
        const birth = formData.get('birth')!.toString()
        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()

        const getNewestCourses= async ()=>{
            const response = await fetch("http://localhost:3000/auth/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phone,
                    birth,
                    email,
                    password
                }),
                mode: "no-cors",
            })
            return response
        }

        const newUser = await getNewestCourses()

        console.log(newUser)
    }


    return (
        <>
            <Head>
                <title>OneBitFlix</title>
            </Head>
            <main className={styles.main}>
                <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login" />
                <Container className="py-5">
                    <p className={styles.formTitle}>Bem vindo(a) a OneBitFlix</p>
                    <Form onSubmit={async (event) => await handleRegister(event)} className={styles.form}>
                        <p className='text-center'><strong>Faça a sua conta</strong></p>
                        <FormGroup>
                            <Label for="firstName" className={styles.label}>NOME</Label>
                            <Input
                                id='firstName'
                                name='firstName'
                                type='text'
                                placeholder='Seu nome'
                                required maxLength={20}
                                className={styles.input}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName" className={styles.label}>SOBRENOME</Label>
                            <Input
                                id='lastName'
                                name='lastName'
                                type='text'
                                placeholder='Seu sobrenome'
                                required
                                className={styles.input}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone" className={styles.label}>TELEFONE</Label>
                            <Input
                                id='phone'
                                name='phone'
                                type='tel'
                                placeholder='(xx) 9 xxxx-xxxx'
                                required
                                className={styles.input}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email" className={styles.label}>E-MAIL</Label>
                            <Input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='asWbA@example.com'
                                required maxLength={20}
                                className={styles.input}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="birth" className={styles.label}>DATA DE NASCIMENTO</Label>
                            <Input
                                id='birth'
                                name='birth'
                                type='date'
                                min='1900-01-01'
                                max='2024-02-01'
                                required
                                className={styles.input}
                            />

                        </FormGroup>
                        <FormGroup>
                            <Label for="password" className={styles.label}>SENHA</Label>
                            <Input
                                id='password'
                                name='password'
                                type='password'
                                placeholder='Digite sua senha (Min: 6 | Max: 20)'
                                minLength={6}
                                required maxLength={20}
                                className={styles.input}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="passwordConfirm" className={styles.label}>CONFIRME SUA SENHA</Label>
                            <Input
                                id='passwordConfirm'
                                name='passwordConfirm'
                                type='password'
                                placeholder='Confirme sua senha'
                                minLength={6}
                                required maxLength={20}
                                className={styles.input}
                            />
                        </FormGroup>
                        <Button type='submit' outline className={styles.formBtn}>
                            CADASTRAR
                        </Button>
                    </Form>
                </Container>
                <Footer />
            </main>
        </>
    )
}

export default Register