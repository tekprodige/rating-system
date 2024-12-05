import "./star-rating.css";

import { useState } from "react";

const StarRating = () => {
  const maxRating = 5;

  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0)

  const setCurrentRatingClickHandler = (ratingValue) => {
    currentRating === ratingValue ? setCurrentRating(0) : setCurrentRating(ratingValue)
}

  return (
    <div className="star-rating-container">
      <h1>current rating: {currentRating}</h1>
      {[...Array(5)].map((_, idx) => {
        const ratingValue = idx + 1;

        return (
          <p key={idx}
          className={`star ${ratingValue <= (hoverRating || currentRating) ? "active" : " "}`}
          onClick={() => setCurrentRatingClickHandler(ratingValue)}
          onMouseEnter={() => setHoverRating(ratingValue)}
          onMouseLeave={() => setHoverRating(0)}
          >
            {ratingValue}
          </p>
        );
      })}
    </div>
  );
};

export default StarRating;
