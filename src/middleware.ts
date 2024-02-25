import { NextRequest, NextResponse } from "next/server";


export const config = {
    matcher:'/((?!_next/static|_next/image|favicon.ico|common-image/.*|courses/.*|episode/.*|homeAuth/.*|homeNoAuth/.*|profile/.*).*)'
}

const publicRoutes = ['/','/login', '/register']
export function middleware(req:NextRequest) {

    if(publicRoutes.includes(req.nextUrl.pathname)){
        return NextResponse.next()
    }

    const session = null

    if(!session){
        return NextResponse.redirect(new URL('/login',req.url))
    }

    return NextResponse.next()
}