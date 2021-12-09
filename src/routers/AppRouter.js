import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { JournalScreen } from '../components/journal/JournalScreen';
import { PageNotFound } from '../components/journal/PageNotFound';
import { AuthRouter } from '../routers/AuthRouter';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element={<AuthRouter/>} />
                <Route path="/" element={<JournalScreen/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>        
        </BrowserRouter>
    )
}
