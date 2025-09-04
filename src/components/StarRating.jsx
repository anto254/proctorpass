import React from "react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const fullStarIcon = (
    <svg
      className="w-5 h-5 fill-current text-yellow-400"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 1.217l2.36 4.813 5.28.77-3.83 3.725.903 5.257L10 15.108l-4.714 2.466.903-5.257-3.83-3.725 5.28-.77L10 1.217z"
      />
    </svg>
  );

  const halfStarIcon = (
    <svg
      className="w-5 h-5 fill-current text-yellow-400"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M15.127 7.94l1.326-1.287a.803.803 0 0 1 1.162 0l1.905 1.85a.803.803 0 0 1 0 1.154l-1.326 1.287.313 1.823a.803.803 0 0 1-1.166.847l-1.652-.87-1.652.87a.803.803 0 0 1-1.166-.847l.313-1.823-1.326-1.287a.803.803 0 0 1 0-1.154l1.905-1.85a.803.803 0 0 1 1.162 0zM10 1.217l2.36 4.813 5.28.77-3.83 3.725.903 5.257L10 15.108l-4.714 2.466.903-5.257-3.83-3.725 5.28-.77L10 1.217z"
      />
    </svg>
  );

  const emptyStarIcon = (
    <svg
      className="w-5 h-5 fill-current text-gray-300"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 1.217l2.36 4.813 5.28.77-3.83 3.725.903 5.257L10 15.108l-4.714 2.466.903-5.257-3.83-3.725 5.28-.77L10 1.217z"
      />
    </svg>
  );

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(fullStarIcon);
  }

  if (halfStar) {
    stars.push(halfStarIcon);
}

for (let i = 0; i < emptyStars; i++) {
stars.push(emptyStarIcon);
}

return <div className="flex items-center">{stars}</div>;
};

export default StarRating;