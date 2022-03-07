import React from "react";
import Image from "next/image";

function Banner() {
  return (
    // SPECIFY HEIGHT WITH RELATIVE
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      ></Image>
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-md sm:text-2xl text-gray-600 font-bold">
          Let your curiosity do the booking
        </p>
        <button className="text-purple-500 py-4 px-10 mt-3 font-bold bg-white shadow-md rounded-full hover:shadow-lg active:scale-90 transition-all">
          I&apos;m Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
