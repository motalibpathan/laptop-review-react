import React, { useEffect, useState } from "react";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyPieChart from "../MyPieChart/MyPieChart";
import SellLineChart from "../SellLineChart/SellLineChart";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="md:container mx-auto md:grid grid-cols-2 gap-16 p-3 mb-10">
      <div className="w-full h-96 md:my-5 mb-16 mt-5">
        <h1 className="text-rose-500 font-bold text-xl text-center my-3">
          Month wise sell
        </h1>
        <SellLineChart data={data} />
      </div>
      <div className="w-full h-96 md:my-5 my-16">
        <h1 className="text-rose-500 font-bold text-xl text-center my-3">
          Investment vs Revenue
        </h1>
        <MyAreaChart data={data} />
      </div>
      <div className="w-full h-96 md:my-5 my-16">
        <h1 className="text-rose-500 font-bold text-xl text-center my-3">
          Investment vs Revenue Bar Chart
        </h1>
        <MyBarChart data={data} />
      </div>
      <div className="w-full h-96 md:my-5 my-16">
        <h1 className="text-rose-500 font-bold text-xl text-center my-3">
          Investment vs Revenue Pie Chart
        </h1>
        <MyPieChart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
