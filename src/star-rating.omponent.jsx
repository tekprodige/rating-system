import "./star-rating.css";

import { useState } from "react";

const StarRating = () => {
  const maxRating = 5;

  const [currentRating, setCurrentRating] = useState(0);

  return (
    <div className="star-rating-container">
      <h1>current rating: {currentRating}</h1>
      {[...Array(5)].map((_, idx) => {
        const ratingValue = idx + 1;

        return (
          <p key={idx}
          className={`star ${ratingValue <= currentRating ? "active" : " "}`}
          onClick={() => setCurrentRating(ratingValue)}>
            {ratingValue}
          </p>
        );
      })}
    </div>
  );
};

export default StarRating;
