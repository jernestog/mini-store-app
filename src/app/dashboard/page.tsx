"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardTable } from "./DashboardTable"

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({role: "" })

  useEffect(() => {
      fetch('api/auth/me')
      .then(resp => resp.json())
      .then(data => {
        if (!data.user || data.user.role !== 'admin'){
          router.push('/')
        }else{
          setUser(data.user)
          setLoading(false)
        }
      })
  }, [])

  const handleLogout = async () => {
    const resp = await fetch('api/auth/logout', {method : 'POST'})
    if(resp.ok) {
      router.push('/')
    }
  }

  if(loading || user.role !== 'admin') return <h2>Verificando usuario...</h2>

  return (
    <div>
      <DashboardTable/>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}