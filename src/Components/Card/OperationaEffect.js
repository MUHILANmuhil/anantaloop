import React from "react";
import "./Cards.css";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Line } from "rc-progress";
import { getdetails } from "../../Slice";
import { useSelector } from "react-redux";

function OperationaEffect() {
  const val = useSelector(getdetails);
  let data = val[0];
  return (
    <div className="Cards">
      <div className="titleHeader">
        <p>Operational Effect</p>
        <InfoOutlinedIcon />
      </div>
      <div className="details">
        <h2>{data.states}%</h2>
        <div className="operationEffect">
          <Line percent={data.states} strokeWidth={4} strokeColor="lightgreen" />
        </div>
      </div>
      <div className="cardFooter">
        <div className="rcDetails">
          <p>WoW Change 12%</p>
          <span>
            <ArrowDropUpOutlinedIcon className="upArrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default OperationaEffect;
