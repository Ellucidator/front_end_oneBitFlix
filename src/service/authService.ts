import { RegisterType } from "@/types/authTypes"
import { LoginType } from "@/types/courseTypes"
import * as jose from 'jose'
import { cookies } from "next/headers"



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
        }).then(res => res.json())

        return res
    },
}


async function openSessionToken(token: string){
    const secret = new TextEncoder().encode('testkey');
    const {payload} = await jose.jwtVerify(token, secret);
    return payload
}

async function createSessionToken (payload={}) {
    const secret = new TextEncoder().encode('testkey');
    const session = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(secret);
    
        const {exp} = await openSessionToken(session)
        
        cookies().set('session', session, {
            expires:(exp as number)*1000,
            path:'/',
            httpOnly: true,
        })
}


export const sessionService = {
    createSessionToken,
    openSessionToken
}