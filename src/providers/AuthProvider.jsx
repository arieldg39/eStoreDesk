import React, { useReducer } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { AuthReducer } from '../reducers/AuthReducer';
import {axiosDb} from '../config/dashAxios';

const initialValues = {
    user: {}, 
    isLogged: false,
    token: '',
    message: ''
}

export const AuthProvider = ({children}) => {
    
    const [ state, dispatch ] = useReducer(AuthReducer, initialValues);

    const login = async(username, pass) => {
        console.log(username, pass);
        try {
            const {data} = await axiosDb.post('/api/auth/login',{
                username: username,
                password: pass,
            });           
            console.log(data);
            localStorage.setItem('token', data.token);
            dispatch({
                type: 'LOGIN',
                payload: {
                    user: {
                        ididusuario: data.dataUser.idusuario,
                        username: data.dataUser.usuario,
                        avatar: data.dataUser.avatar,
                        acceso: data.dataUser.acceso,
                    },
                    token: data.token
                }
            })            
        } catch (error) {
            console.log(error);            
            dispatch({
                type: 'ERROR-MESSAGE',
                payload: {
                    msg: error.response.data.tipoerror
                }
            }) 
        }
    };

    const logout = () => {      
        dispatch({
            type: 'LOGOUT',
        })
    }

    return (
        <AuthContext.Provider value={{
            state,
            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}
