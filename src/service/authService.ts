import { RegisterType } from "@/types/authTypes"
import { LoginType } from "@/types/courseTypes"
import * as jose from 'jose'
import { cookies } from "next/headers"
import { redirect } from "next/navigation";



async function openSessionToken(token: string){
    const secret = new TextEncoder().encode('secret');
    const {payload} = await jose.jwtVerify(token, secret);
    return payload
}

async function createSessionToken (token:string) {

    
        const {exp} = await openSessionToken(token)
        
        cookies().set('session', token, {
            expires:(exp as number)*1000,
            path:'/',
            httpOnly: true,
        })
}

async function isSessionValid() {
    const sessionCookie = cookies().get('session')

    if(!sessionCookie){
        return false
    }

    const {value} = sessionCookie
    const {exp} = await openSessionToken(value)

    const currentDate = new Date().getTime()

    return ((exp as number) * 1000) > currentDate
}

export const sessionService = {
    isSessionValid,
    createSessionToken,
    openSessionToken
}

export const authService = {
    register: async (user: RegisterType ) => {
        console.log(JSON.stringify(user))
        const res =await fetch("http://localhost:3000/auth/register",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
            cache: "force-cache",
        })
        if(res.ok){
            redirect('/login')
        }else{
            return false
        }
    },

    login: async (user: LoginType ) => {
        const res = await fetch("http://localhost:3000/auth/login",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
            cache: "no-store",
        })

        const {token} = await res.json()
        console.log(token)

        if(token){
            await createSessionToken(token)
            redirect('/homePage')
        }else{
            return false
        }
        
    },
}




