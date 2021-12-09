import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { PageNotFound } from '../components/journal/PageNotFound';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">    
                <Routes>
                    <Route path="login" element={<LoginScreen/>}/>
                    <Route path="register" element={<RegisterScreen/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>
        </div>
    )
}
