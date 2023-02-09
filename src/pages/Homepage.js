import React from "react";
import Topbar from "../components/Topbar";
import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

const Homepage = () => {
  return (
    <>
      <Topbar className="bg-white" />
      <div className=" grid grid-cols-3 bg-[#EBEDF0]  ">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </>
  );
};

export default Homepage;
