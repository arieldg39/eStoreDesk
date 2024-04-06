import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import {AuthContext} from '../contexts/AuthContext'
import { AuthLayout } from '../layouts/AuthLayout';
import { PrivateRoutes } from './PrivateRoutes';
import { GeneralLayout } from '../layouts/GeneralLayout';

export const AppRoutes = () => {
    const { state, checkToken } = useContext(AuthContext);
    const isLogged = state.isLogged;
    //const isLogged = false;
    
    return (
        <Routes>
            <Route path='/auth/login' element={
                <PublicRoutes isLogged={isLogged}>
                    <AuthLayout/>
                </PublicRoutes>
            }/>
            <Route/>

            <Route path='/*' element={
            <PrivateRoutes isLogged={isLogged}>
                <GeneralLayout />
            </PrivateRoutes>
        } />
            
        </Routes>
    )
}
