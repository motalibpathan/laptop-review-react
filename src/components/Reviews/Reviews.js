import React from "react";
import useReviews from "../../hooks/useReviews";
import DisplayReviews from "../DisplayReviews/DisplayReviews";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="md:container mx-auto">
      <h1 className="text-4xl text-center my-3">What our customers say!</h1>
      <DisplayReviews reviews={reviews}></DisplayReviews>
    </div>
  );
};

export default Reviews;
