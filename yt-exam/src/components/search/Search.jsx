import React from 'react'

import useFetch from '../../utils/api.jsx'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useEffect ,useParams } from 'react'
import { MyContext } from '../Context/Context.jsx'
import Header from '../Header/Header.jsx'
// import { ThemeContext } from '../utils/ThemeContext';
function SearchFeed() {
    const {searchTitle}=useContext(MyContext)
    // const {searchTitle}=useParams()
    const {data}=useFetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${searchTitle}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
      ) 
    useEffect(()=>{
     
    },[searchTitle])
  return (
    <>
    <Header/>
    <div  className='vid  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5' >
    {data?.items?.map((element) => (
    <Link to={`video/${element.id.videoId}`} key={element.id.videoId}>
            <div className="videoCard">
        <img
          className="w-full videoimg"
          src={element.snippet.thumbnails.medium.url}
          alt=""
        />
        <p className="">{element.snippet.title}</p>
        <div className="">
          <p className="">
            {element.snippet.channelTitle}
          </p>
          <p className="">{element.snippet.publishTime}</p>
            </div>
        </div>
    </Link>
  ))}
     </div>
    </>
  
  )
}

export default SearchFeed