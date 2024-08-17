import React from "react";
import profile from "../assets/profile.jpg";

const RightSide = () => {
  return (
    <div className="py-5 my-4 mx-4">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-[10px]">
          <div className="w-[45px] h-[45px] ">
            <img
              src={profile}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="tablet:text-[12px] desktop:text-[15px]">
            <div>junaidofficial678</div>
            <div className="text-[#999]">Muhammad Junaid</div>
          </div>
        </div>

        <div className="tablet:text-[12px] desktop:text-[14px]">
          <a href="#" className="text-blue-500 text-[12px] font-semibold">
            Switch
          </a>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex justify-between items-center">
          <div className="laptop:text-[13px] desktop:text-[15px] text-[#999] font-semibold">
            Suggested For You
          </div>
          <div>
            <a
              href="#"
              className="laptop:text-[12px] desktop:text-[14px] font-semibold"
            >
              See All
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-[10px]">
            <div className="w-[45px] h-[45px] ">
              <img
                src={profile}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="tablet:text-[12px] desktop:text-[15px]">
              <div>junaidofficial678</div>
              <div className="text-[#999]">Muhammad Junaid</div>
            </div>
          </div>

          <div>
            <a
              href="#"
              className="text-blue-500 tablet:text-[12px] desktop:text-[14px] font-semibold"
            >
              Follow
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-[10px]">
            <div className="w-[45px] h-[45px] ">
              <img
                src={profile}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="tablet:text-[12px] desktop:text-[15px]">
              <div>junaidofficial678</div>
              <div className="text-[#999]">Muhammad Junaid</div>
            </div>
          </div>

          <div>
            <a
              href="#"
              className="text-blue-500 tablet:text-[12px] desktop:text-[14px] font-semibold"
            >
              Follow
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-[10px]">
            <div className="w-[45px] h-[45px] ">
              <img
                src={profile}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="tablet:text-[12px] desktop:text-[15px]">
              <div>junaidofficial678</div>
              <div className="text-[#999]">Muhammad Junaid</div>
            </div>
          </div>

          <div>
            <a
              href="#"
              className="text-blue-500 tablet:text-[12px] desktop:text-[14px] font-semibold"
            >
              Follow
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
