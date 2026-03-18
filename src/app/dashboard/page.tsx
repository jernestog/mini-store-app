"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getToken, removeToken } from "@/src/lib/auth"

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = getToken()

    if (!token) {
      router.push("/login")
    }else {
        setLoading(false)
    }
  }, [])

  const handleLogout = () => {
    removeToken()
    router.push("/login")
  }

  if(loading) return <h2>Verificando usuario...</h2>

  return (
    <div>
      <h1>Dashboard (Privado)</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}