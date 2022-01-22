import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React, { Component, createContext, useContext } from 'react';
import Prac from "./components/Practice/Prac";
import Student from "./components/Practice/Student";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import Footer from "./components/Footer/Footer";

import ScrollTop from "./components/Homepage/ScrollTop";
import Favorite from "./components/Favorite/Favorite";

import PageNF from "./PageNF";
import Login from "./components/Login/Login";

import NavbarGuest from "./components/Navbar/NavbarGuest";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase-config";
import { useEffect, useState } from "react";
import Profile3 from "./components/Profile/Profile3";
import JourneyHome from "./components/JourneyPlanning/JourneyHome";

import Map from "./components/JourneyPlanning/Map";
import About from "./components/About/About";

import Blog from "./components/Blog/Blog";
import Dashboard from './components/Dashboard/Dashboard';
import QuestionAnswer from './components/QA/QuestionAnswer';
import DashBoardLogin from './components/DashBoardLogin/DashBoardLogin';
import Github from "./components/Dashboard/Github";
import Member from './components/Dashboard/Member'
import { getadminloginpage, getisadmin, setisadmin } from "./components/DashBoardLogin/DBoardLoginInfo";



export const AppContext = createContext();


function App() {
  const [user, setUser] = useState({});


  //登入登出狀態 監聽
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  //判斷地圖進入
  const [openMap, setOpenMap] = useState(false);



  //判斷後台和後台登入
  const location = useLocation();

  // const isdashboardRendering = (location.pathname === "/dashboard" || "/members" || "reports" || "employee") || (location.pathname === "/dashboardlogin");
  const ismap = location.pathname === "/map";
  const [isadmin, setIsAdmin] = useState("");
  // const [adminloginpage, setAdminLoginPage] = useState("")
  useEffect(() => {
    const conditionbackendlogin = async () => {
      setIsAdmin(await getisadmin())
    }

    conditionbackendlogin();

  }, [isadmin])
  const adminlogin = localStorage.getItem("adminloginpage");
  console.log("adminloginpage", adminlogin);




  //console.log("App",isadmin);
  return (
    <AppContext.Provider value={{ user, isadmin, setIsAdmin }}>
      <div className="App">

        {(isadmin === "false" && adminlogin === "false") && <ScrollTop />}
        {/* isadmin === "false" &&  */}{(adminlogin === "false") && (user ? <Navbar user={user} /> : <NavbarGuest user={user} />)}


        <Routes>
          {/* need write route */}
          <Route path="*" element={<PageNF />} />
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/login" element={<Login />} />

          <Route path="/about" element={<About />} />
          <Route path="/qa" element={<QuestionAnswer />} />

          <Route path="/blog" element={<Blog />} />
          {user && <Route path="/profile" element={<Profile3 />} />}
          {user && <Route path="/favorite" element={<Favorite />} />}
          <Route path="/journeyplanhome" element={user ? <JourneyHome openMap={openMap} setOpenMap={setOpenMap} /> : <Login />} />
          {user && <Route path="/map" element={<Map />} />}
          <Route path="/dashboardlogin/*" element={<DashBoardLogin isadmin={isadmin} setIsAdmin={setIsAdmin} />} />
          {isadmin === "true" && <Route path="/dashboard" element={<Dashboard />} />}
          {isadmin === "true" && <Route path="/dashboard/github" element={<Github />} />}
          {isadmin === "true" && <Route path="/dashboard/member" element={<Member />} />}
          <Route path="/dashboard/*" element={<BackendLoading />} />
        </Routes>
        {(adminlogin === "false" && !ismap) && <Footer />}



      </div>
    </AppContext.Provider>
  );
}
{
  /* <Prac /> */
}
export default App;

const BackendLoading = () => {
  return (
    <div className="backendloading" style={{ backgroundColor: 'whitesmoke' }}>

    </div>
  )
}
