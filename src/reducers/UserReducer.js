import { types } from "../types/types"

export const UserReducer = (state={}, action) => {  

    switch (action.type) {

        case types.user.getUsers:
            return{
                ...state,
                isLoading: false,
                users: action.payload.users,
                totalRows: action.payload.totalRows
            }

        case types.user.getOneUser:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user
            }
        
        default: 
            return state;
    }
}
