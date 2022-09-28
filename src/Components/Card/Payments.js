import React from "react";
import "./Cards.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { getdetails } from "../../Slice";
import { useSelector } from "react-redux";
function Payments() {
  const val = useSelector(getdetails);
  const newVal = val.map((d) => {
    return { nv: d.negative };
  });
  const Data = newVal.slice(330, 335);
  return (
    <div className="Cards">
      <div className="titleHeader">
        <p>Payments</p>
        <InfoOutlinedIcon />
      </div>
      <div className="details">
        <h2>{Data[4].nv}</h2>
        <div className="Payments chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={Data}>
              <Bar dataKey="nv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="cardFooter">
        <p>Conversion Rate 60%</p>
      </div>
    </div>
  );
}

export default Payments;
