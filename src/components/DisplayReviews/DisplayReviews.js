import React from "react";
import Review from "../Review/Review";

const DisplayReviews = ({ reviews }) => {
  return (
    <div className="my-5 p-3">
      <div className="grid md:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default DisplayReviews;
