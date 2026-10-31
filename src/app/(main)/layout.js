
import Header from '@/component/Header';
import Navbar from '@/component/Navbar';
import BreakingNews from '@/component/shared/BreakingNews';
import React from 'react';

const MainlayoutPage = ({children}) => {
    return (
        <>
            <Header/>
            <BreakingNews/>
            <Navbar/>
           {children} 
        </>
    );
};

export default MainlayoutPage;