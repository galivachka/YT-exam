import React from "react";
import useFetch from "../../custom/useFetch";
import "../Card/Card.scss";
import CardVideo from "../CardVideo/CardVideo";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/Context";
import { useContext } from "react";
const Card = () => {
  const { data, loading, error } = useFetch(
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50"
  );
  const { color, handleColor,color2,handleChange } = useContext(MyContext);

  //   console.log(data.items);

  //   data?.items?.map((element) => {
  //     console.log(element);
  //   });

  return (
    <div  className={color2 ? 'bg-neutral-800 text-white card' : 'bg-neutral-100 text-gray-800  card'} >
      {data?.items?.map((element) => (
        <Link
         className={color2 ? 'bg-neutral-800 text-white card__link' : 'bg-neutral-100 text-gray-800  card__link'}
          to={`news/${element.id.videoId}`}
          key={element.id.videoId}
        >
          <div  className={color2 ? 'bg-neutral-800 text-white card__box block' : 'bg-neutral-100 text-gray-800 card__box block'}>
            <img
              className="card__img"
              src={element.snippet.thumbnails.medium.url}
              alt=""
            />
            <p className={color2 ? 'bg-neutral-800 text-white card__title' : 'bg-neutral-100 text-gray-800 card__title'}>{element.snippet.title}</p>
            <div className={color2 ? 'bg-neutral-800 text-white card__title-box' : 'bg-neutral-100 text-gray-800 card__title-box'}>
              <p className={color2 ? 'bg-neutral-800 text-white card__chanel-title' : 'bg-neutral-100 text-gray-800 card__chanel-title'}>
                {element.snippet.channelTitle}
              </p>
              <p className={color2 ? 'bg-neutral-800 text-white card__chanel-time' : 'bg-neutral-100 text-gray-800 card__chanel-time'}>{element.snippet.publishTime}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
