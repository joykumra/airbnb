import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ item }) {
  const { img, location, title, description, star, price, total } = item;
  return (
    <div className="flex space-x-4 py-7 pl-2 pr-4 border-b cursor-pointer hover:opacity-90 hover:shadow-lg transition duration-100 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        ></Image>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-sm">{location}</p>
          <HeartIcon className="h-5 cursor-pointer"></HeartIcon>
        </div>
        <h2 className="text-xl">{title}</h2>

        <div className="border-b w-10 p-2"></div>

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex items-end pt-5 justify-between">
          <p className="flex items-center space-x-1">
            <StarIcon className="h-5 text-red-400"></StarIcon>
            {star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
