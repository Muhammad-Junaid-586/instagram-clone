import React from "react";
import Stories from "./Stories";
import instagramLogo from "../assets/Instagram.svg";
import messenger from "../assets/Messenger.svg";
import notification from "../assets/Notifications.svg";
import Post from "./post/Post";
import afridi from "../assets/shaheen.jpeg";
import tiger from "../assets/tiger.jpeg";
import boom from "../assets/boom.jpeg";
import salman from "../assets/salman.jpeg";

const postsData = [
  {
    imageUrl: afridi,
    description: "Shaheen Afridi",
    time: ".11 m",
    likes: 100,
    comments: "World danger player",
    commentsCount: 331,
  },
  {
    imageUrl: tiger,
    description: "Tiger Sherof",
    time: ".21 m",
    likes: 508,
    comments: "my all time favorite",
    commentsCount: 3031,
  },
  {
    imageUrl: boom,
    description: "Shahid Afridi",
    likes: 1238,
    time: ".21 h",
    comments: "World Best all-rounder boom",
    commentsCount: 4531,
  },
  {
    imageUrl: salman,
    description: "Salman Khan",
    likes: 1008,
    time: ".53 m",
    comments: "Bollywood Boss",
    commentsCount: 2078,
  },
];

const MiddleSide = () => {
  return (
    <div>
      <div className="tablet:hidden flex items-center justify-between mx-[25px]">
        <div className="logopart  ml-[15px] mt-[25px] mb-[10px] ">
          <img src={instagramLogo} alt="Instagram Logo" />
        </div>

        <div className="flex gap-[25px]">
          <img
            src={notification}
            alt="notification"
            className="w-[25px] h-[25px] cursor-pointer"
          />
          <img
            src={messenger}
            alt="message"
            className="w-[25px] h-[25px] cursor-pointer"
          />
        </div>
      </div>

      <div className="flex w-[80%] overflow-x-auto mx-auto h-[130px] items-center storeis-scroll">
        <Stories />
      </div>

      <div className="post-section w-[80%] tablet:w-[60%] mx-auto">
        {postsData.map((post, index) => (
          <Post
            key={index}
            imageUrl={post.imageUrl}
            description={post.description}
            time={post.time}
            likes={post.likes}
            comments={post.comments}
            commentsCount={post.commentsCount}
          />
        ))}
      </div>
    </div>
  );
};

export default MiddleSide;
