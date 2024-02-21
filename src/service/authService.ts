import { RegisterType } from "@/types/registerTypes"



export const authService = {

    register: async (user: RegisterType ) => {
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            body: JSON.stringify(user)
        })
        const newUser = await response.json()
        return newUser
    },
}