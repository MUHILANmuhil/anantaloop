import React from "react";
import "./Sales.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { getdetails } from "../../Slice";
import { useSelector } from "react-redux";

function Sales() {
  const val = useSelector(getdetails);
  const nVal = val.map((i) => {
    return {
      date: i.date,
      sales: i.pending,
    };
  });
  const Sales = nVal.slice(0, 10);
  return (
    <div className="salesHolder">
      <div className="title">
        <div className="left Container">
          <h4>Sales</h4>
          <h4>Visits</h4>
        </div>
        <div className="right Container">
          <h4>All day</h4>
          <h4>All week</h4>
          <h4>All month</h4>
          <h4>All year</h4>
        </div>
      </div>
      <div className="Sales">
        <p>Stores Sales Trend</p>
        <div className="sales chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={Sales}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" stackId="a" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Sales;
