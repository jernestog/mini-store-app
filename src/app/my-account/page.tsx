'use client'
import { useRouter } from "next/navigation"
import { useSessionState } from "@/src/stores/sessionStore"


const Page = () => {
    const router = useRouter()
    const logout = useSessionState(state => state.logout)

    const handleLogout = async () => {
    const resp = await fetch('api/auth/logout', {method : 'POST'})
    if(resp.ok) {
      router.push('/')
    }
    logout()
  }

  return (
    <div>
        <div>Mi cuenta</div>
        <button  className="bg-black text-white rounded px-6 py-1"
                 onClick={handleLogout}>
           Cerrar sesión
        </button>
    </div>
  )
}

export default Page
