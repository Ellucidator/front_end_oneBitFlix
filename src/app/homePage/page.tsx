import { sessionService } from '@/service/authService'
import styles from './styles.module.scss'
import { cookies } from 'next/headers'
import HeaderAuth from '@/components/common/headerAuth'
import { Metadata } from 'next'

export const metadata:Metadata = {
    title:'One Bit Flix - Home',
}

const HomePage = async function (){

    return(
        <main>
            <HeaderAuth/>
        </main>
    )
}


export default HomePage