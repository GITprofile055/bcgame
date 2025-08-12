import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Language from "./components/Langauge";
import Dashboard from "./pages/home/Dashboard";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import { AuthProvider } from "./components/AuthContext";
import { ProtectedRoute, PublicRoute } from './Helper/helper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Navbar } from "react-bootstrap";
// import { Sidebar } from "lucide-react";

function AppContent() {
    const location = useLocation();
    const hiddenFooterRoutes = [

    ];

    // Check if current path matches any of the above OR dynamic TradingChart route
    const hideFooter =
        hiddenFooterRoutes.includes(location.pathname) ||
        location.pathname.startsWith("/add-walletAddress") ||
        location.pathname.startsWith("/dashboard/TradingChart");

    return (
        <div >


            <Routes>

                <Route path="/dashboard" element={<Dashboard />} />


            </Routes>

            {!hideFooter && (
                <>
                    <Header />
                    <Footer />
                    <Sidebar />
                    <Navbar />
                </>
            )}

            <ToastContainer />
        </div>
    );
}

function App() {
    return (
        <AuthProvider>

            <AppContent />

        </AuthProvider>
    );
}

export default App;
