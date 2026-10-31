
import Header from '@/component/homepage/Header';
import Navbar from '@/component/homepage/Navbar';
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