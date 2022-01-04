import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// pages
import ErrorPage from "./pages/fourohfour";
import MainPage from "./pages/Main.jsx";

import {onMessageListener} from "./firebase/config";
import Notifications from "./components/Notifications/Notifications";
import ReactNotificationComponent from './components/Notifications/ReactNotificaton';

function App() {
    const [show,
        setShow] = useState(false)
    const [notification,
        setNotification] = useState({title: "", body: ""});

    onMessageListener().then((payload) => {
        setShow(true);
        setNotification({title: payload.notification.title, body: payload.notification.body});
        console.log(payload);
    }).catch((err) => console.log("failed: ", err));

    return (
        <Router>
            <div className="App">
            {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
      <Notifications />
                <Routes>
                    <Route exact path="/" element={< MainPage />}/>
                    <Route path="*" element={< ErrorPage />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
