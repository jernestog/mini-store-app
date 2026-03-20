import {create} from "zustand";
import { persist } from "zustand/middleware";


type UserSession  = {
    name : string,
    username : string,
    role: string
}
type SessionState = {
    user : UserSession,
    setUserSession : (user : UserSession ) => void
    logout : () => void
}

export const useSessionState = create<SessionState>() (
    persist((set) => ({
        user : {
            name : '',
            username : '',
            role : ''
        },
        setUserSession : (user) => {
            set({
                user : user
            })
        },
        logout  : () => set({
            user : {
                name: '',
                username : '',
                role: '',
            }
        }),
        
    }), { name : 'sessionState' }
    
))