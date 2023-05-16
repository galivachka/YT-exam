import React from "react";
import { useState, useEffect, useContext } from "react";
// import useFetch from "../../custom/useFetch";
import { MyContext } from "../Context/Context";
import Header from "../Header/Header";
import Card from "../Card/Card";
import "../Home/Home.scss";

const Home = () => {
  const { color,color2 } = useContext(MyContext);

  return (
    <>
    <Header/>
      <div  className={color2 ? 'bg-neutral-800 text-white fixed right-0 top-16 pr-12 flex flex-col home' : 'fixed right-0 top-16 pr-12 flex flex-col bg-neutral-100 text-gray-800  home'} 
       
      >
        <div className="home__box mb-12">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;


// !color
// ? "home fixed right-0 top-16 pr-12 flex flex-col"
// : "home w-11/12 fixed right-0 top-16 pr-12 flex flex-col"
// }