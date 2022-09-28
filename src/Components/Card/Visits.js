import React, { PureComponent } from "react";
import "./Cards.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { getdetails } from "../../Slice";
import { useSelector } from "react-redux";

function Visits() {
  const val = useSelector(getdetails);
  const newVal = val.map((d, i) => {
    return { pv: d.positive }
  });
  return (
    <div className="Cards">
      <div className="titleHeader">
        <p>Visits</p>
        <InfoOutlinedIcon />
      </div>
      <div className="details">
        <h2>{newVal.length}</h2>
        <div className="visits chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={newVal}>
              <Area type="monotone" dataKey="pv" stroke="green" fill="green" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="cardFooter">
        <p>Daily Visits 1,234</p>
      </div>
    </div>
  );
}

export default Visits;
