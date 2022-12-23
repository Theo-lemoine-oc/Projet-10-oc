import React from "react";
import './locationPage.css';

import redStar from "../../assets/img/red-star.svg";
import greyStar from "../../assets/img/grey-star.svg";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating-icon"
            src={redStar}
            alt="Étoiles rouges"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating-icon"
            src={greyStar}
            alt="Étoiles grises"
          />
        )
      )}
    </div>
  );
};

export default Rating;