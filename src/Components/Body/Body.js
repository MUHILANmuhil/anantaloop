import React from "react";
import "./Body.css";
import PriceCard from "../Card/PriceCard";
import Visits from "../Card/Visits";
import Payments from "../Card/Payments";
import OperationalEffect from "../Card/OperationaEffect";
import Invoice from "../Invoice/Invoice";
import Vendor from "../Vendor/Vendor";
import Sales from "../Sales/Sales";

function Body() {

  return (
    <div className="Body">
      <div className="cardHolder">
        <PriceCard />
        <Visits />
        <Payments />
        <OperationalEffect />
      </div>
      <div className="detailHolder">
        <Sales />
      </div>
      <div className="vendorInHolder">
        <Invoice />
        <Vendor />
      </div>
    </div>
  );
}

export default Body;
