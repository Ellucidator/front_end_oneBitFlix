'use client'

import { useRouter } from "next/navigation"

const Button = ({btnHref}:{btnHref:string})=>{
    const router = useRouter()

    const redirect = ()=>{
        router.push(btnHref)
    }
    return (
        <>
            <button onClick={redirect} type="submit" className={`btn btn-outline-secondary`}>
                CADASTRAR
            </button>
        </>
    )
}

export default Button