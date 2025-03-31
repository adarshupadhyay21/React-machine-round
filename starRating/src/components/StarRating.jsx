import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={`star ${starValue <= (hover || rating) ? "active" : ""}`}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(starValue === rating ? starValue - 1 : starValue)}
          >
            ★
          </span>
        );
      })}
      <p>Current Rating: {rating}</p>
    </div>
  );
};

export default StarRating;
