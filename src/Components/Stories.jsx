import React from "react";
import shahrukh from "../assets/shahrukh.jpeg";
import salman from "../assets/salman.jpeg";
import babar from "../assets/babar.jpeg";
import noman from "../assets/noman-ijaz.jpeg";
import tiger from "../assets/tiger.jpeg";
import boom from "../assets/boom.jpeg";
import afridi from "../assets/shaheen.jpeg";
import anil from "../assets/anil.jpeg";
import rizwan from "../assets/rizwan.jpeg";
import feroz from "../assets/feroz.jpeg";
import virat from "../assets/kholi.jpeg";
import karina from "../assets/karina.jpeg";

let storiesArr = [
  {
    name: "Shahrukh Khan",
    src: shahrukh,
  },
  {
    name: "Salman Khan",
    src: salman,
  },
  {
    name: "Babar Azam",
    src: babar,
  },
  {
    name: "Noman Ijaz",
    src: noman,
  },
  {
    name: "Boom Boom Afridi",
    src: boom,
  },
  {
    name: "Tiger Shroff",
    src: tiger,
  },
  {
    name: "Shaheen Afridi",
    src: afridi,
  },
  {
    name: "Anil Kapoor",
    src: anil,
  },
  {
    name: "Muhammad Rizwan",
    src: rizwan,
  },
  {
    name: "Feroz Khan",
    src: feroz,
  },
  {
    name: "Virat Kohli",
    src: virat,
  },
  {
    name: "Karina Kapoor",
    src: karina,
  },
];

function Stories() {
  return (
    <>
      {storiesArr.map((item, index) => {
        const truncatedName =
          item.name.length > 10 ? `${item.name.substring(0, 9)}...` : item.name;

        return (
          <div
            key={index}
            className="mr-[10px] flex flex-col items-center justify-center"
          >
            <div className="p-[2px] border-[#642731] border-[1px] rounded-full w-[65px] h-[65px]">
              <img
                src={item.src}
                alt={item.name}
                className="rounded-full w-full h-full"
              />
            </div>
            <div className="text-[10px]">{truncatedName}</div>
          </div>
        );
      })}
    </>
  );
}

export default Stories;
