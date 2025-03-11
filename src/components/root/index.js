import React from 'react';
import Navigation from '../navigation';
// import Outlet
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <>
            <Navigation/>
            <Outlet /> {/* Outlet tell the Parent Route where to display any Nested element*/}
        </>
    );
};

export default Root;