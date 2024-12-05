import "./star-rating.css";

import { useState, useCallback, useEffect } from "react";

const StarRating = ({ maxRating = 5, onChange = () => {}}) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const setCurrentRatingClickHandler = useCallback(
    (ratingValue) => {
      currentRating === ratingValue
        ? setCurrentRating(0)
        : setCurrentRating(ratingValue);
    },
    [currentRating]
  );

  useEffect(() => {
    onChange(currentRating)
  }, [currentRating, onChange])



  return (
    <div className="star-rating-container">
      
      <div className="box">
        {[...Array(maxRating)].map((_, idx) => {
          const ratingValue = idx + 1;

          return (
            <p
              key={idx}
              className={`star ${
                ratingValue <= (hoverRating || currentRating) ? "active" : " "
              }`}
              onClick={() => setCurrentRatingClickHandler(ratingValue)}
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(0)}
            >
              &#9733;
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
