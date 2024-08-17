import React from "react";

import like from "../../assets/Like.svg";
import comment from "../../assets/Comment.svg";
import save from "../../assets/Save.svg";
import share from "../../assets/Share.svg";

const Post = ({
  imageUrl,
  description,
  likes,
  comments,
  commentsCount,
  time,
}) => {
  return (
    <div className="border-b-[1px] py-3 mt-2">
      <div className="post-info flex items-center gap-[20px]">
        <div className="w-[40px] h-[40px] rounded-full">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="font-semibold">{description}</div>
        <div className="text-gray-400">{time}</div>
      </div>

      <div className="pt-2 w-full h-full ">
        <img src={imageUrl} alt="" className="w-full rounded-[5px]" />
      </div>

      <div className="flex justify-between py-2">
        <div className="flex gap-[20px]">
          <img src={like} alt="" />
          <img src={comment} alt="" />
          <img src={share} alt="" />
        </div>

        <div>
          <img src={save} alt="" />
        </div>
      </div>

      {/* like section */}

      <div className="img-like-div">
        <div className="relative">
          <img
            src={imageUrl}
            alt=""
            className="w-[20px] h-[20px] rounded-full absolute"
          />
          <img
            src={imageUrl}
            alt=""
            className="w-[20px] h-[20px] rounded-full absolute left-[2%]"
          />
        </div>
        <div className="ml-[35px] font-semibold text-[14px]">{likes} likes</div>
      </div>

      {/* comment section */}

      <div className="flex">
        <div className="name font-semibold text-[14px]">{description}</div>
        <div className="text-[14px] text-gray-400 ml-[10px]">{comments}</div>
      </div>

      <div className="text-gray-600 text-[12px]">{`View All ${commentsCount} Comments`}</div>
      <div className="text-gray-600 text-[14px]">add a Comments</div>
    </div>
  );
};

export default Post;
