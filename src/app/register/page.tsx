import HeaderGeneric from "@/components/common/headerGenric"
import Head from "next/head"


const Register = function (){
    return(
        <>
            <Head>
                <title>OneBitFlix</title>
            </Head>
            <main> 
                <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login"/>
            </main>

        </>
    )
}

export default Register