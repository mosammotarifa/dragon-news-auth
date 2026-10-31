import Navbar from '@/component/Navbar';
import React from 'react';

const AuthLayoutPage = ({children}) => {
    return (
        <>
            <Navbar/>
           {children} 
        </>
    );
};

export default AuthLayoutPage;