import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoveryPassword from '../containers/RecoveryPassword';

import '../styles/global.css';




const App = () => {
    return (
        <BrowserRouter>
            <Layout>
            <Routes>               

                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword/>} />
                    <Route path='*' element={<NotFound/>} />
               
                </Routes>
                 </Layout>
            </BrowserRouter>
    );
}

export default App;