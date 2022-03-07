import React from "react";
import Image from "next/image";

function WishlistCard() {
  const card = {
    img: "https://links.papareact.com/4cj",
    title: "The Greatest Outdoors",
    description: "Wishlists curated by Airbnb",
    buttonText: "Get Inspired",
  };
  return (
    <section className="relative my-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={card.img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        ></Image>
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{card.title}</h3>
        <p>{card.description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 mt-5 rounded-lg cursor-pointer">
          {card.buttonText}
        </button>
      </div>
    </section>
  );
}

export default WishlistCard;
