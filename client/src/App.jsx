import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import LoginReg from "./pages/user_login_registration.jsx";
import BugPage from "./pages/report_bug_page.jsx";
import AdminPage from "./pages/adminPage.jsx";
import LoginAdmin from "./pages/login_admin.jsx";
import LandingPage from "./components/landingComponent.jsx";
export default function App()
{
    const[darkMode, setDarkMode] = useState("");

    useEffect(()=>{
        const themeResult = window.matchMedia("(prefers-color-scheme:dark)").matches
        console.log(themeResult);
        setDarkMode(themeResult);
    },[])
      
      const bg = darkMode ? "dark": ""
      console.log(`bg is : ${bg}`)
    return (
        <div className={`${bg} dark:bg-slate-900 bg-white min-h-screen`}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<div><Header/><Outlet/></div>}>
                    <Route index element={<LandingPage />} />
                    <Route path="register" element={<LoginReg />} />
                    <Route path="services" element={<h1 className="text-2xl text-center dark:text-white">Our Services</h1>} />
                    <Route path="*" element={<h1 className="text-2xl text-center dark:text-white">404 Not Found</h1>} />
                    <Route path="bug" element={<BugPage />}/>
                    <Route path='admin_login' element={<LoginAdmin/>}/>
                    <Route path="admin_page" element={<AdminPage/>}/>
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}


 