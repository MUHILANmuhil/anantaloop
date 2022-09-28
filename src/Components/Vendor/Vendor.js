import React from "react";
import "./Vendor.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getdetails } from "../../Slice";
import { useSelector } from "react-redux";

function Vendor() {
  const val = useSelector(getdetails);
  const Nval = val.map((i) => {
    return {
      vendor: i.hospitalizedIncrease,
    };
  });
  const Vendor = Nval.slice(0, 8);
  return (
    <div className="vendorHolder">
      <div className="title">
        <h4>All vendors</h4>
      </div>
      <div className="vendor chart">
        <ResponsiveContainer height="100%" width="100%">
          <BarChart data={Vendor} layout="vertical" maxBarSize={20}>
            <CartesianGrid horizontal={false} />
            <XAxis
              type="number"
              axisLine={false}
              stroke="#a0a0a0"
              // domain={[0, 3000]}
              strokeWidth={5}
            />
            <YAxis type="category" dataKey="vendor" />
            <Bar dataKey="vendor" fill="lightgreen"></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Vendor;
