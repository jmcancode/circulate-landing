import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// pages
import ErrorPage from "./pages/fourohfour";
import MainPage from "./pages/Main.jsx";


function App() {


    return (
        <Router>
            <div className="App">
             
                <Routes>
                    <Route exact path="/" element={< MainPage />}/>
                    <Route path="*" element={< ErrorPage />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
