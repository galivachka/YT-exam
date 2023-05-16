import React from "react";
import { useState, useContext } from "react";
import { MyContext } from "../Context/Context.jsx";
import { NavLink } from "react-router-dom";

import { BiHome } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineFolder } from "react-icons/ai";
import { RiFilePaper2Line } from "react-icons/ri";
import { TfiAlarmClock } from "react-icons/tfi";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { BiJoystick } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

import "../Navbar/Navbar.scss";

const Navbar = ({ user }) => {
  const { color,color2, handleColor } = useContext(MyContext);

  return (
    <>
    <div className={color2 ? 'bg-neutral-800 text-white ' : 'bg-neutral-100 text-gray-800 '}>
    <div className={!color ? "navbar fixed left-8 top-1 pb-8 flex flex-col" : "hidden"} >
        <div  className={color2 ? 'bg-neutral-800 text-white navbar__bottom' : 'bg-neutral-100 text-gray-800 navbar__bottom'}>
          <nav className="navbar__n">
            <ul className="navbar__list">
              <li className="navbar__item">
                <NavLink className="navbar__n-link" to={"/"}>
                  <BiHome className="navbar__link-home navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Home</span>
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink className="navbar__n-link" to={"/trending"}>
                  <AiOutlineFire className="navbar__link-trending navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Trending</span>
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink className="navbar__n-link" to={"/subscriptions"}>
                  <MdOutlineSubscriptions className="navbar__link-subscriptions navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Subscriptions</span>
                </NavLink>
              </li>
            </ul>
            <ul className="navbar__list-two m-0 p-0 mt-16 flex flex-col items-start gap-7 list-none">
              <li className="navbar__item-two">
                <NavLink to={"/library"} className="navbar__n-link">
                  <AiOutlineFolder className="navbar__link-library navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Library</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/history"} className="navbar__n-link">
                  <RiFilePaper2Line className="navbar__link-history navbar__link-icon w-5 h-5 rotate-180" />
                  <span className="navbar__link-span">History</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/watchlater"} className="navbar__n-link">
                  <TfiAlarmClock className="navbar__link-watch navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Watch later</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/favourites"} className="navbar__n-link">
                  <AiOutlineStar className="navbar__link-star navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Favourites</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/liked"} className="navbar__n-link">
                  <AiOutlineHeart className="navbar__link-like navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Liked videos</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/music"} className="navbar__n-link">
                  <BsMusicNoteBeamed className="navbar__link-music navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Music</span>
                </NavLink>
              </li>
              <li className="navbar__item-two">
                <NavLink to={"/games"} className="navbar__n-link">
                  <BiJoystick className="navbar__link-games navbar__link-icon w-5 h-5" />
                  <span className="navbar__link-span">Games</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="navbar__box mt-8">
            <select className="navbar__select outline-0 cursor-pointer">
              <option className="navbar__option">Show more</option>
            </select>
          </div>
        
          <div className="navbar__settings m-0 p-0 mt-24">
          
          </div>
        </div>
      </div>
      <div
        className={
          !color
            ? " hidden"
            : "navbar fixed w-7 left-8 top-20 pb-8 flex flex-col"
        }
      >
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink to={"/"}>
              {" "}
              <BiHome className="navbar__link-home w-7 h-7" />
            </NavLink>
          </li>
          
        </ul>
      </div>
    </div>
   
    </>
  );
};

export default Navbar;
