import React from "react";
import Review from "../Review/Review";

const DisplayReviews = ({ reviews }) => {
  return (
    <div className="my-5">
      <h3 className="text-3xl font-bold text-center my-5">
        Customers Reviews ({reviews.length})
      </h3>
      <div className="grid grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default DisplayReviews;
