import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="md:container mx-auto grid grid-cols-2">
      <div className="my-3">
        <h1 className="text-rose-500 font-bold text-xl text-center my-3">
          Month wise sell
        </h1>
        <LineChart height={400} width={600} data={data}>
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
      </div>
      <div className="my-3">
        <h1 className="text-rose-500 font-bold text-xl text-center my-3">
          Investment vs Revenue
        </h1>
        <AreaChart height={400} width={600} data={data}>
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#4a41ff"
            fill="#8884d8"
            activeDot={{ r: 8 }}
          ></Area>
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#00ad9580"
            fill="#1cffe080"
            activeDot={{ r: 8 }}
          ></Area>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <XAxis dataKey={"month"} />
          <YAxis />
        </AreaChart>
      </div>
    </div>
  );
};

export default Dashboard;
