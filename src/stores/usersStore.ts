import {create} from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../interfaces/intefaces";

const users = [
  { id: '1', name: 'Pedro Galdamez',  username: 'pedrito', password: '0000', role: 'admin' },
  { id: '2', name: 'Sandro Lopez', username: 'sancho96', password: '4544', role: 'customer' }
];


type UsersStateType = {
    users : User[]
    addUser : (user : User) => void
}

export const useUsersState = create<UsersStateType>()(
    persist((set) => {
   return ({
        users : users,
        
        addUser: (user) => {
          
            set((state) => {
                let exist = state.users.some(u => u.username == user.username )
                if (exist) {
                  return state
                }

                return {
                    users : [...state.users, user]
                }
                
            })
        }
        
    })}, {
        name : 'usersState'
    }))