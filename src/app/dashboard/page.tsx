"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardTable } from "./DashboardTable"
import Spinner from "@/src/components/Spinner"

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


  if(loading || user.role !== 'admin') return  <div className="flex flex-col place-self-center"><Spinner/> Loading</div>

  return (
    <div>
      <DashboardTable/>
    </div>
  )
}