import React from "react";
import { exploreData, liveAnywhereData } from "../../data";
import ExploreCard from "./ExploreCard";
import LiveAnywhereCard from "./LiveAnywhereCard";
import WishlistCard from "./WishlistCard";

function HomeContent() {
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-16">
        <h2 className="text-4xl font-semibold pb-5">
          Inspiration for the next Trip
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map((item, index) => (
            <ExploreCard item={item} key={index}></ExploreCard>
          ))}
        </div>
      </section>

      <section className="pt-16">
        <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
        <div className="flex items-center space-x-3 overflow-x-scroll scrollbar-hide">
          {liveAnywhereData.map((item, index) => (
            <LiveAnywhereCard item={item} key={index}></LiveAnywhereCard>
          ))}
        </div>
      </section>

      <WishlistCard></WishlistCard>
    </main>
  );
}

export default HomeContent;
