import { createSlice } from "@reduxjs/toolkit";
import { Comment } from "./Comment";

const userSlice = createSlice({
    name: "comment",
    initialState: Comment,
    reducers:{
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const {id, message } = action.payload
            const uu = state.find(user => user.id == id)
            if(uu){
                uu.message = message
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload
            const uu = state.find(comment => comment.id == id)
            if(uu) {
                return state.filter(f => f.id !== id) 
            }
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer