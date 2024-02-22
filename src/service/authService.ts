import { RegisterType } from "@/types/registerTypes"



export const authService = {

    register: async (user: RegisterType ) => {
        const response = await fetch("http://localhost:3000/auth/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
            mode: "no-cors",
        })
        const newUser = await response.json()
        return newUser
    },
}
