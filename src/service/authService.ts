import { RegisterType } from "@/types/authTypes"
import { LoginType } from "@/types/courseTypes"


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
            cache: "force-cache",
        }).then(res => res.json())

        return res.token
    }
}
