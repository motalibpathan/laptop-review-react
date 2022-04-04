import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import Slider from "../Slider/Slider";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const shownReviews = reviews.slice(0, 3);
  return (
    <div className="md:container mx-auto">
      <Slider></Slider>
      <div className="my-5">
        <h3 className="text-3xl font-bold text-center my-5">
          Customers Reviews (3)
        </h3>
        <div className="grid grid-cols-3 gap-5">
          {shownReviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="py-2 px-9 bg-rose-500 my-9 text-white rounded-md font-bold hover:bg-transparent hover:-translate-y-3 duration-500 border-2 border-rose-500 hover:text-rose-500">
            Sell All Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
