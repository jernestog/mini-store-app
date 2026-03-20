'use client'
import { useRouter } from "next/navigation"
import { useSessionState } from "@/src/stores/sessionStore"
import { Title } from "@/src/components/Title"


const Page = () => {
    const router = useRouter()
    const logout = useSessionState(state => state.logout)
    const sessionUser = useSessionState(state => state.user)

    const handleLogout = async () => {
    const resp = await fetch('api/auth/logout', {method : 'POST'})
    if(resp.ok) {
      router.push('/')
    }
    logout()
  }

  return (
    <div>
        <Title text="Mi cuenta"></Title>
        
          {
          sessionUser.username !== '' &&
          <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>User-avatar SVG Icon</title><path fill="#000000" d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5" fill="#000000" /></svg>
            <span >Session started :<strong> { sessionUser.username }</strong></span>
          </div>
          }
        
        <button  className="bg-black text-white rounded px-6 py-1"
                 onClick={handleLogout}>
           Cerrar sesión
        </button>
    </div>
  )
}

export default Page
