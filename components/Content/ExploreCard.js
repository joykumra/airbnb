import React from "react";
import Image from "next/image";

function ExploreCard(props) {
  const { item } = props;
  return (
    <div className="flex items-center space-x-4 m-2 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all ease-out">
      <div className="relative h-16 w-16">
        <Image src={item.img} layout="fill" className="rounded-lg"></Image>
      </div>

      <div>
        <p>{item.location}</p>
        <p>{item.distance}</p>
      </div>
    </div>
  );
}

export default ExploreCard;
