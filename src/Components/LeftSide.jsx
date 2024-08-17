import React from "react";
import instagramLogo from "../assets/Instagram.svg";
import home from "../assets/Home.svg";
import reels from "../assets/Reels.svg";
import search from "../assets/Search.svg";
import explore from "../assets/Explore.svg";
import messenger from "../assets/Messenger.svg";
import notification from "../assets/Notifications.svg";
import create from "../assets/New post.svg";
import profile from "../assets/profile.jpg";
import more from "../assets/More Options.svg";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

let sidebarArr = [
  {
    icon: home,
    text: "Home",
  },
  {
    icon: search,
    text: "Search",
  },
  {
    icon: explore,
    text: "Explore",
  },
  {
    icon: reels,
    text: "Reels",
  },
  {
    icon: explore,
    text: "Explore",
  },
  {
    icon: messenger,
    text: "Messenger",
  },
  {
    icon: notification,
    text: "Notification",
  },
  {
    icon: create,
    text: "Create",
  },
  {
    icon: profile,
    text: "Profile",
  },
  {
    icon: more,
    text: "More",
  },
];

const LeftSide = () => {
  return (
    <div className="leftSidePart fixed  overflow-y-scroll lg:overflow-y-auto max-h-full ">
      <div className="logopart  ml-[15px] mb-[30px] ">
        <img src={instagramLogo} alt="Instagram Logo" />
      </div>

      <div className="navlinkPart mb-[50px]">
        {sidebarArr.map((item, index) => {
          return (
            <div
              className="navlink flex items-center h-[30px] py-[20px] px-[15px] mb-[8px] hover:bg-[#ededed] rounded-[6px]"
              key={index}
            >
              <img
                src={item.icon}
                alt={item.text}
                className={`mr-[10px] ${
                  item.text === "Profile" ? "w-[30px]" : ""
                } rounded-full`}
              />
              <div className=""> {item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSide;
