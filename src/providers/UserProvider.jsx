import  { useReducer } from 'react'
import { UserContext} from '../contexts/UserConetx'
import { UserReducer } from '../reducers/UserReducer';
import { axiosDb } from '../config/dashAxios';
import { types } from '../types/types';

const initialState = {
    isLoading: true,
    isActive: false,
    users: [],
    user: {},
    totalRows: 0,
    errorMessage: '',
    succesMessage: '',
}

export const UserProvider = ({children}) => {
    
    const [ state, dispatch ] = useReducer(UserReducer,  initialState);

    const getUsers =async ()=> {

        const {data} = await axiosDb.get('api/users/getusers');

        if(!data){
            return dispatch({
                type: types.user.messages,
                payload: {
                    messageStatus: 'ERROR',
                    msg: 'No Existen usuarios en el sistema',
                }
            })
        };
        
        dispatch({
            type: types.user.getUsers,
            payload:  {
                users:  data.res.users,
                totalRows: data.res.totalRows
            }
        });
    };
    
    return (
        <UserContext.Provider value={{
            state,
        }}>
            { children }
        </UserContext.Provider>
    )
}
