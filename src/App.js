import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// pages
import LandingPage from "./pages/landing";
import ErrorPage from "./pages/fourohfour";
// components
// import FooterNav from "./components/nav";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={< LandingPage />}/>
                    <Route path="*" element={< ErrorPage />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
