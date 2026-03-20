"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { OrderList } from "./OrderList"

export default function Orders() {
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

  
  if(loading || user.role !== 'admin') return <h2>Verificando usuario...</h2>

  return (
    <div>
        <OrderList/>
    </div>
  )
}