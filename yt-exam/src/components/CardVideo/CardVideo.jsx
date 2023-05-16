import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../Context/Context";
import useFetch from "../../custom/useFetch";
import { Link } from "react-router-dom";
import "../CardVideo/CardVideo.scss";
import Header from "../Header/Header";


const CardVideo = () => {
  const { data, loading, error } = useFetch(
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50"
  );

  const { id } = useParams();

  const { color,color2 } = useContext(MyContext);

  return (
    <div
      className={
        !color
          ? "video fixed right-0 top-16 mt-8 pr-12 flex flex-col"
          : "video-scroll w-11/12 fixed right-0 top-16  mt-8 pr-12 flex flex-col"
      }
    >
      <Header/>
      <div  className={color2 ? 'bg-neutral-800 text-white video__box flex gap-2' : 'bg-neutral-100 text-gray-800  video__box flex gap-2'}  >
        <div>
          <iframe
            className="video__iframe"
            width="750"
            height="515"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="video__card flex flex-col gap-3">
          {data?.items?.map((element) => (
            <Link
              className="video__link"
              to={`news/${element.id.videoId}`}
              key={element.id.videoId}
            >
              <div className="video__minicard flex gap-2">
                <img
                  className="video__img"
                  src={element.snippet.thumbnails.medium.url}
                  alt=""
                />
                <div className="video__title-box mt-1">
                  <p className="video__title text-left">
                    {element.snippet.title}
                  </p>
                  <p className="video__channel-title text-left">
                    {element.snippet.channelTitle}
                  </p>
                  <p className="video__video-time text-left">
                    {element.snippet.publishTime}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
