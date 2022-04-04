import React from "react";

const Review = ({ review }) => {
  const { img, name, reviewText, rating } = review;
  return (
    <div className="border-2 p-5 rounded-md">
      <div className="flex items-center mb-3">
        <img className="w-10 h-10 rounded-full" src={img} alt="" />
        <h1 className="ml-2 font-bold text-xl">{name}</h1>
      </div>
      <p className="my-3">
        Rating: <span className="font-bold">{rating}</span>
      </p>
      <p> {reviewText}</p>
    </div>
  );
};

export default Review;
