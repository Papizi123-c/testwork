import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Main from './pages/main/Main'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQnWrxoc5naZ4vaIe28M1wlmejc67KOEw",
  authDomain: "testwork-bb023.firebaseapp.com",
  projectId: "testwork-bb023",
  storageBucket: "testwork-bb023.appspot.com",
  messagingSenderId: "198687114774",
  appId: "1:198687114774:web:8089f40b9c62c5637c9737",
  measurementId: "G-VBC75TRWGX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/cards" element={<Main/>}/>
      </Routes>
    </Router>
  </>
);
