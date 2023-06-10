import React, { useState, useEffect } from 'react';
import { Route, Routes, Outlet } from "react-router-dom";
import { RoutesURI } from "./routes";

// Components
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Sidebar from "./components/Sidebar";

// Pages
import DashboardOverview from "./pages/DashboardOverview";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import Shifts from "./pages/Shifts";
import Buses from "./pages/Buses";
import Bays from "./pages/Bays";


const TopbarLayout = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <> 
      <Preloader show={loaded ? false : true} /> 
      <main className="content">
        <Navbar />
        <Outlet/> 

      </main>
      {/* <Footer /> */}
    </>
  );
};

const SidebarLayout = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={loaded ? false : true} />
      <Sidebar />

      <main className="content">
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </main>
    </>
  );
};

function App() {
  return (
    <Routes>
      {/* 404 Page */}
      <Route path='*' element={<NotFound />} />

      <Route element={<TopbarLayout/>}>
        
      </Route>

      <Route element={<SidebarLayout/>}>
        <Route path={RoutesURI.DashboardOverview.path} element={<DashboardOverview/>} />
        <Route path={RoutesURI.Users.path}             element={<Users/>}             />
        <Route path={RoutesURI.Shifts.path}            element={<Shifts/>}            />
        <Route path={RoutesURI.Bays.path}              element={<Bays/>}              />
        <Route path={RoutesURI.Buses.path}             element={<Buses/>}             />
      </Route>
    </Routes>
  );
}

export default App;
