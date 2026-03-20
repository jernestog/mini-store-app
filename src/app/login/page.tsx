"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { login2 } from "@/src/lib/api"
import { useSessionState } from "@/src/stores/sessionStore"
import Spinner from "@/src/components/Spinner"


const Login = () => {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState('')
        const userSession = useSessionState(state => state.user)
        const setUserSession = useSessionState(state => state.setUserSession)
        const router = useRouter()

        useEffect(() => {
            if (userSession?.role === 'admin' || userSession?.role === 'customer') {
            router.replace('/my-account')
            }else{
                setLoading(false)
            }
            
        }, [userSession, router]);

        const handleSubmit  = async (e : React.FormEvent<HTMLFormElement>)  => {
            e.preventDefault();
            
                 const data = await login2(username, password);
                 
                if (!data.success){
                    setError(data.message)
                    console.log(data)
                }else {
                    
                    router.push('/');
                    setUserSession({
                        name : data.name,
                        username : data.username,
                        role : data.role
                    })
                }
        }

        if( loading ) return <div className="flex flex-col place-self-center"><Spinner/> Loading</div>

    return (
        <section className="min-h-full w-full flex items-center justify-center">
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <div className="my-2">
                    <label htmlFor="username">Username :</label>
                    <div className="p1 border rounded">
                    <input type="text"
                            name="username"
                            id="username"
                            required 
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    
                </div>
                <div className="my-2">
                    <label htmlFor="password">Pasword :</label>
                    <div className="p1 border rounded">
                    <input type="password"
                            name="password"
                            id="password"
                            required 
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    {
                      error == "" ? <></> : <span className="text-red-300 font-bold text-sm">{error}</span>
                    }
                
                    <Link href={'/register'}>
                    <span>Don't have an account? Sign up</span>
                    </Link>

                <button type="submit" className="bg-black text-white rounded px-6 py-1 my-2">
                    Login
                </button>
                </div>


            </form>
        </div>
        </section>
    )

}

export default Login