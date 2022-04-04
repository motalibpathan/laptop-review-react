import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="md:container mx-auto grid grid-cols-3 gap-10 p-5">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
