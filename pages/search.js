import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import format from "date-fns/format";
import InfoCard from "../components/Content/InfoCard";
import AirbnbMap from "../components/Content/Map";

function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} to ${formattedEndDate}`;
  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${noOfGuests} guests`}
      ></Header>

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden md:inline-flex items-center space-x-3 mb-5 text-gray-500 whitespace-nowrap">
            <p className="searchLink">Cancellation Flexiblity</p>
            <p className="searchLink">Type of Place</p>
            <p className="searchLink">Price</p>
            <p className="searchLink">Room</p>
            <p className="searchLink">Beds</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item, index) => (
              <InfoCard key={index} item={item}></InfoCard>
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <AirbnbMap searchResults={searchResults}></AirbnbMap>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://links.papareact.com/isz");
  const data = await res.json();

  return {
    props: {
      searchResults: data,
    },
  };
}

export default Search;
