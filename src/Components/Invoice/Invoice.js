import React from "react";
import "./Invoice.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getdetails } from "../../Slice";
import { useSelector } from "react-redux";

function Invoice() {
  const val = useSelector(getdetails);
  const nval=val.map((i)=>{
    return{
      value:i.deathIncrease
    }
  })
  const Rate=nval.slice(0,5)
  // console.log(Rate);
  // const data = [
  //   { name: "Group A", value: 400 },
  //   { name: "Group B", value: 300 },
  //   { name: "Group C", value: 300 },
  //   { name: "Group D", value: 200 },
  //   { name: "Group D", value: 150 },
  // ];

  const COLORS = ["#7084e7", "#9385e3", "#b786e0", "#da88dc","#fe89d8"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="invoiceHolder">
      <div className="title">
        <h4>Invoice by location</h4>
      </div>
      <div className="invoice chart">
        <ResponsiveContainer>
          <PieChart width={400} height={400}>
            <Pie
              data={Rate}
              cx={150}
              cy={150}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {Rate.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Invoice;
