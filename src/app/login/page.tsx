"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/src/lib/api"
import { saveToken } from "@/src/lib/auth"


const Login = () => {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const router = useRouter()

        const handleSubmit  = async (e : React.FormEvent<HTMLFormElement>)  => {
            e.preventDefault();

            const data = await login(username, password)
            saveToken(data)
            router.push('/dashboard')
        }


    return (
        <section className="min-h-full w-full flex items-center justify-center">
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username :</label>
                    <div className="p1 border rounded">
                    <input type="text"
                            name="username"
                            id="username"
                            required 
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    
                </div>
                <div>
                    <label htmlFor="password">Pasword :</label>
                    <div className="p1 border rounded">
                    <input type="password"
                            name="password"
                            id="password"
                            required 
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className="bg-black text-white rounded px-6 py-1">
                    Login
                </button>


            </form>
        </div>
        </section>
    )

}

export default Login