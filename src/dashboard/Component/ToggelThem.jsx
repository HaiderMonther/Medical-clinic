import React from "react";
import { Button } from "antd";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ToggelThem = ({ darkTheme, toggelThem }) => {
    return (
     <div className="toggel1">
          <Button onClick={toggelThem}>
              {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
          </Button>
     </div>
    );
  };

export default ToggelThem;