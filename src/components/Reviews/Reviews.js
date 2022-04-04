import React from "react";
import useReviews from "../../hooks/useReviews";
import DisplayReviews from "../DisplayReviews/DisplayReviews";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="md:container mx-auto">
      <DisplayReviews reviews={reviews}></DisplayReviews>
    </div>
  );
};

export default Reviews;
