import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import DisplayReviews from "../DisplayReviews/DisplayReviews";
import Slider from "../Slider/Slider";

const Home = () => {
  const [reviews] = useReviews();
  const navigate = useNavigate();
  const shownReviews = reviews.slice(0, 3);

  const handleNavigate = () => {
    navigate("/reviews");
  };

  return (
    <div className="md:container mx-auto">
      <Slider></Slider>
      <h3 className="text-3xl font-bold text-center my-5">
        Customers Reviews ({shownReviews.length})
      </h3>
      <DisplayReviews reviews={shownReviews}></DisplayReviews>
      <div className="flex justify-center">
        <button
          onClick={handleNavigate}
          className="py-2 px-9 bg-rose-500 my-9 text-white rounded-md font-bold hover:bg-transparent hover:-translate-y-3 duration-500 border-2 border-rose-500 hover:text-rose-500"
        >
          Sell All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
