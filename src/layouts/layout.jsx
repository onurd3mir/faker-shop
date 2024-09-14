import { Outlet } from "react-router-dom";

import Nav from "../components/nav";

export default function Layout() {
    return (
        <>
            <Nav />
            <div className='container mt-5'>
                <Outlet />
            </div>
        </>
    )
}