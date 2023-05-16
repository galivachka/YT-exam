import { useState, useContext } from "react";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import useFetch from "./custom/useFetch";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import CardVideo from "./components/CardVideo/CardVideo";
import "./App.css";
import { MyProvider } from "./components/Context/Context";
import { MyContext } from "./components/Context/Context";
import Header from "./components/Header/Header";
import Search from './components/search/Search'
function App() {
  const { data, loading, error } = useFetch(
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50"
  );

  const [user, setUser] = useState(null);

  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }

    return unsubscribe;
  }, []);
 const {color2}=useContext(MyContext)
  return (
        <div>
          <MyProvider>
          <Routes>
        <Route element={<Home className={color2? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-gray-800'} />} path='/' />
         <Route element={<CardVideo />} path="news/:id" />
         <Route  element={<Search/>} path='search'/>
        <Route
          element={<Register/>}
          path="/register"
        />
        <Route
          element={<Login /> } 
          path="/login"
        />
      </Routes>
          </MyProvider>
    
        </div>
          
  );
}

export default App;
 