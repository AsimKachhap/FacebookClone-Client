import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const Topbar = () => {
  return (
    <div className="flex flex-row justify-between px-2 py-1 ">
      <div>
        <FacebookOutlinedIcon />
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default Topbar;
