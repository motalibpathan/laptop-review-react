import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
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
    <div className="md:container mx-auto md:grid grid-cols-2 gap-16 p-3">
      <div className="w-full h-96 md:my-5 my-10">
        <h1 className="text-rose-500 font-bold text-xl text-center my-3">
          Month wise sell
        </h1>
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
      <div className="w-full h-96 md:my-5 my-10">
        <h1 className="text-rose-500 font-bold text-xl text-center my-3">
          Investment vs Revenue
        </h1>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="investment"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <XAxis dataKey={"month"} />
            <YAxis />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
