import React from "react";
import "./Cards.css";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function PriceCard() {
  return (
    <div className="Cards">
      <div className="titleHeader">
        <p>Total Sales</p>
        <InfoOutlinedIcon />
      </div>
      <div className="details">
        <h2>$126,560</h2>
        <div className="rateChanges">
          <div className="rcDetails">
            <p>WoW Change 12%</p>
            <span>
              <ArrowDropUpOutlinedIcon className="upArrow" />
            </span>
          </div>
          <div className="rcDetails">
            <p>DoD Change 11%</p>
            <span>
              <ArrowDropDownOutlinedIcon className="downArrow" />
            </span>
          </div>
        </div>
      </div>
      <div className="cardFooter">
        <p>Daily Sales $ 12,423</p>
      </div>
    </div>
  );
}

export default PriceCard;
