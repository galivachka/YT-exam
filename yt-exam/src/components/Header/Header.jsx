import React from "react";
import { useState, useContext } from "react";
import { MyContext } from "../Context/Context";
import { auth } from "../../firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { AiFillYoutube } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { MyProvider } from "../Context/Context";
import Navbar from "../Navbar/Navbar";



import "../Header/Header.scss";

const Header = () => {
  // const {searchTitle,setSearchTitle} = useContext(MyProvider)
  const { color, handleColor,color2,handleChange ,searchTitle,setSearchTitle } = useContext(MyContext);
 const navigate =useNavigate()
 const handleChange2 =()=>{
     if (searchTitle) {
      navigate(`search`);
     }
 }
  


  return (
    <>
    <Navbar/>
    <div className={color2 ? 'bg-neutral-800 text-white header fixed top-0 left-0 right-8 flex items-center justify-between pt-3 pl-8 pr-11' : 'bg-neutral-100 text-gray-800  header fixed top-0 left-0 right-8 flex items-center justify-between pt-3 pl-8 pr-11'}>
      <div className="header__box-one flex items-center gap-3">
        <button
          onClick={handleColor}
          className="header__menu-btn w-8 h-8 m-0 p-0 cursor-pointer"
        >
          <GiHamburgerMenu className="header__menu-icon w-6 h-6 mr-auto" />
        </button>
        <Link className="header__logo flex items-center" to={"/"}>
          {
            <AiFillYoutube
              className={
                !color ? "header__logo-icon w-9 h-8 ml-auto" : "hidden"
              }
            
            />
           
          }
           <span>You Tube</span>
          
        </Link>
      </div>
      <form className="header__form flex items-center ml-auto">
        <input
          type="text"
          onChange={(e)=> setSearchTitle(e.target.value)}
          className="header__search w-96 pt-3 pb-3 px-6 block border-2 rounded-l-3xl outline-0"
          placeholder="Search ..."
          value={searchTitle}
        />
        <button className="header__search-btn border-2 " onClick={handleChange2}>
          <AiOutlineSearch className="w-11 h-6" />
        </button>
      </form>
       
      <div className="header__box-two flex gap-2 items-center ml-auto">
      <button  className='change_btn' onClick={handleChange} ><BsMoon /></button>
        <div
          
        >
          <button className="header__button w-8 h-8 border-0">
            <AiOutlineVideoCamera className="w-7 h-7" />
          </button>
          <button className="header__button w-8 h-8 border-0">
            <CgMenuGridO className="w-7 h-7" />
          </button>
          <button className="header__button w-8 h-8 border-0">
            <IoMdNotificationsOutline className="w-7 h-7" />
          </button>
         
        </div>
        <div>
          <Link
            to={"/login"}
            className="flex items-center gap-2 border-2 py-2 px-4 rounded-3xl  "
          >
            <RiAccountCircleLine className="w-7 h-7" />
            Log in
          </Link>
        </div>
        
      </div>
     
    </div>
    </>
   
    
  );
};

export default Header;
