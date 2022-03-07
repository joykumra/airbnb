import React from "react";
import Image from "next/image";

function LiveAnywhereCard(props) {
  const { item } = props;
  return (
    <div>
      <div className="relative h-80 w-80 hover:scale-105 transition duration-300 ease-out cursor-pointer">
        <Image src={item.img} layout="fill" className="rounded-xl"></Image>
      </div>
      <h3 className="text-2xl mt-3">{item.title}</h3>
    </div>
  );
}

export default LiveAnywhereCard;
