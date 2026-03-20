"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { register } from "@/src/lib/api"
import { useSessionState } from "@/src/stores/sessionStore"
import { useUsersState } from "@/src/stores/usersStore"
import Spinner from "@/src/components/Spinner"
import { toast } from "react-toastify"
        
 const Page = () => {
const [name, setName] = useState('')
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
                        const id = crypto.randomUUID()
                        const data = await register({id, name, username, password, role: 'customer'});
                         
                        if (!data.success){
                            setError(data.message)
                        }else {
                            toast.success('Sign up success!')
                           
                            router.push('/');
                            setUserSession({
                                username : data.username,
                                role : data.role
                            })
                        }
                }
        
                if(loading) return <div><Spinner/>Loading</div>
        
            return (
                <section className="min-h-full w-full flex items-center justify-center">
                <div>
                    <form action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <div className="p1 border rounded">
                            <input type="text"
                                    name="name"
                                    id="name"
                                    required 
                                    onChange={(e) => setName(e.target.value)}/>
                            </div>  
                        </div>
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
                        <div className="flex flex-col">
                            {
                              error == "" ? <></> : <span className="text-red-300 font-bold text-sm">{error}</span>
                            }
                        
                        <button type="submit" className="bg-black text-white rounded px-6 py-1">
                            Login
                        </button>
                        </div>
        
        
                    </form>
                </div>
                </section>
            )
        
        }
        
        

  


export default Page