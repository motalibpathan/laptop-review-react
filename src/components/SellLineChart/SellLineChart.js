import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SellLineChart = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="sell"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          ></Line>
          <Tooltip />
          <Legend />
          <XAxis dataKey={"month"} />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SellLineChart;
