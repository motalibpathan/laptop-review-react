import React from "react";
import Review from "../Review/Review";

const Reviews = ({ reviews }) => {
  return (
    <div className="grid grid-cols-3 gap-10 ">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
