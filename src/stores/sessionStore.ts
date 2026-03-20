import {create} from "zustand";
import { persist } from "zustand/middleware";

import { User } from "../interfaces/intefaces";

type SessionState = {
    user : User,
    setUserSession : (user : User) => void
    logout : () => void
}

export const useSessionState = create<SessionState>() (
    persist((set) => ({
        user : {
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
                username : '',
                role: '',
            }
        }),
        
    }), { name : 'sessionState' }
    
))