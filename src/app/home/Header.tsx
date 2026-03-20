'use client'

import Link from "next/link"
import { useSessionState } from "@/src/stores/sessionStore"
export const Header = () => {
        const userSession = useSessionState(state => state.user)

    return (
        <header>
            <div className="w-full h-full flex justify-between items-center p-2">
                <div className="w-full h-10 flex cursor-pointer">
                    <Link href={'/'}>
                    <span className="font-extrabold text-2xl text-black">mini-store</span>
                    </Link>
                </div>

                <div className="flex p-2 ">
                    {
                        userSession.role == 'admin' &&
                    <Link href={"/orders"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><title>Baseline-list-alt SVG Icon</title><path fill="black" d="M19 5v14H5V5zm1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"/></svg>
                    </Link>
                    }

                    
                    {
                        userSession.role == 'admin' &&
                    <Link href={"/dashboard"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-black" viewBox="0 0 24 24">
                        <path d="M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6H5v-4h4ZM20 3h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 6h-4V5h4Zm1 7h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M9 9H5V5h4Z"/>
                        </svg>
                    </Link>
                    }
                    
                    <Link href={"/cart"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 512 512"><title>Cart SVG Icon</title><path fill="#000000" d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32m224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32"/></svg>
                    </Link>
                    <Link href={'/login'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><title>Baseline-person SVG Icon</title><path fill="#000000" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"/></svg>
                    </Link>
                </div>
               
            </div>
           
        </header>
    )
}