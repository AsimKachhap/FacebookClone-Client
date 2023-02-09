import React from "react";
import { FaUserFriends } from "react-icons/fa";
import {
  BsFillCalendarFill,
  BsShopWindow,
  BsFillSave2Fill,
  BsFillStarFill,
  BsMessenger,
} from "react-icons/bs";
import { MdGroups, MdVideocam } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";
import { BiCalendarEvent } from "react-icons/bi";

const LeftSidebar = () => {
  return (
    <div className=" min-h-screen  ">
      <ul>
        <li>
          <div className=" flex flex-row items-center gap-4  p-2 my-2 ml-2 hover:bg-[#DADDE1] pointer-cursor rounded-md ">
            <div className=" text-blue-500 ">
              <FaUserFriends className="h-[30px] w-[30px]" />
            </div>
            <div className="font-semibold font-montserrat ">Friends</div>
          </div>
        </li>
        <li>
          <div className=" flex flex-row items-center gap-4  p-2 my-2 ml-2 hover:bg-[#DADDE1] pointer-cursor rounded-md ">
            <div className="text-blue-500">
              <BsFillCalendarFill className="h-[30px] w-[30px]" />
            </div>
            <div className="font-semibold font-montserrat ">Most Recent</div>
          </div>
        </li>
        <li>
          <div className=" flex flex-row items-center gap-4  p-2 my-2  ml-2 hover:bg-[#DADDE1] ">
            <div className="text-blue-500">
              <MdGroups className="h-[30px] w-[30px]" />
            </div>
            <div className="font-semibold font-montserrat">Groups</div>
          </div>
        </li>
        <li>
          <div className=" flex flex-row items-center gap-4  p-2 my-2 ml-2 hover:bg-[#DADDE1] pointer-cursor rounded-md ">
            <div className="text-blue-500">
              <BsShopWindow className="h-[30px] w-[30px]" />
            </div>
            <div className="font-semibold font-montserrat">Market Place</div>
          </div>
        </li>
        <li>
          <div className=" flex flex-row items-center gap-4  p-2 my-2 ml-2 hover:bg-[#DADDE1] pointer-cursor rounded-md ">
            <div className="text-blue-500">
              <MdVideocam className="h-[30px] w-[30px]" />
            </div>
            <div className="font-semibold font-montserrat">Watch</div>
          </div>
        </li>
        <li>
          <div className=" flex flex-row items-center gap-4  p-2 my-2 ml-2 hover:bg-[#DADDE1] pointer-cursor rounded-md ">
            <div className="text-blue-500">
              <GiBackwardTime className="h-[30px] w-[30px]" />
            </div>
            <div className="font-semibold font-montserrat">Memories</div>
          </div>
        </li>
        <li>
          <div className=" flex flex-row items-center gap-4  p-2 my-2 ml-2 hover:bg-[#DADDE1] pointer-cursor rounded-md ">
            <div className="text-blue-500">
              <BsFillSave2Fill className="h-[30px] w-[30px]" />
            </div>
            <div className="font-semibold font-montserrat">Saved</div>
          </div>
        </li>
        <li>
          <div className=" flex flex-row items-center gap-4  p-2 my-2 ml-2 hover:bg-[#DADDE1] pointer-cursor rounded-md ">
            <div className="text-blue-500">
              <BiCalendarEvent className="h-[30px] w-[30px]" />
            </div>
            <div className="font-semibold font-montserrat">Events</div>
          </div>
        </li>
        <li>
          <div className=" flex flex-row items-center gap-4  p-2 my-2 ml-2 hover:bg-[#DADDE1] pointer-cursor rounded-md ">
            <div className="text-blue-500">
              <BsFillStarFill className="h-[30px] w-[30px]" />
            </div>
            <div className="font-semibold font-montserrat">Favourites</div>
          </div>
        </li>
        <li>
          <div className=" flex flex-row items-center gap-4  p-2 my-2 ml-2 hover:bg-[#DADDE1] pointer-cursor rounded-md ">
            <div className="text-blue-500">
              <BsMessenger className="h-[30px] w-[30px]" />
            </div>
            <div className="font-semibold font-montserrat">Messenger</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
