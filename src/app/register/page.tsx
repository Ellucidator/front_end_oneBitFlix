'use client'
import Footer from '@/components/common/footer'
import styles from './page.module.scss'
import HeaderGeneric from "@/components/common/headerGenric"
import Head from "next/head"
import { Container, Form, FormGroup, Input, Label } from "reactstrap"


const Register = function (){
    return(
        <>
            <Head>
                <title>OneBitFlix</title>
            </Head>
            <main className={styles.main}> 
                <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login"/>
                <Container className="py-5">
                    <p className={styles.formTitle}>Bem vindo(a) a OneBitFlix</p>
                    <Form className={styles.form}>
                        <p className='text-center'><strong>Faça a sua conta</strong></p>
                        <FormGroup>
                            <Label for="firstName" className={styles.label}>NOME</Label>
                            <Input
                            id='firstName'
                            name='firstName' 
                            type='text' 
                            placeholder='Seu nome' 
                            required maxLength={20} 
                            className={styles.inputName}
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
                            className={styles.inputName}
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
                    </Form>
                </Container>
                <Footer/>
            </main>
        </>
    )
}

export default Register