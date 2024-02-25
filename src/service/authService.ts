import { RegisterType } from "@/types/authTypes"
import { LoginType } from "@/types/courseTypes"
import * as jose from 'jose'
import { cookies } from "next/headers"



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

export const authService = {
    register: async (user: RegisterType ) => {
        console.log(JSON.stringify(user))
        await fetch("http://localhost:3000/auth/register",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
            cache: "force-cache",
        })
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
            return true
        }else{
            return false
        }
        
    },
}




