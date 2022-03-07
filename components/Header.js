import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState("1");

  const [changeNavbar, setChangeNavbar] = useState(false);
  const [showNavlinks, setShowNavlinks] = useState(false);

  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const selectionHandler = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInputHandler = () => {
    setSearchInput("");
  };

  const searchHandler = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 84) {
        setChangeNavbar(true);
      } else {
        setChangeNavbar(false);
      }
    });
  }, [changeNavbar]);

  return (
    <header
      className={`sticky top-0 z-50 grid grid-cols-3 p-5 md:px-10shadow-md ${
        changeNavbar ? "bg-white" : "bg-black"
      }`}
    >
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        ></Image>
      </div>

      <div className="flex items-center py-2 md:border-2 md:shadow-sm rounded-full">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder ? placeholder : "Start your search"}
          className={`flex-grow pl-5 bg-transparent outline-none cursor-pointer ${
            changeNavbar
              ? "text-black placeholder:text-black"
              : "text-gray-300 placeholder:text-gray-300"
          }`}
        ></input>
        <SearchIcon className="hidden md:inline-flex h-6 md:mx-2 text-red-400"></SearchIcon>
      </div>

      <div
        className={`flex items-center justify-end space-x-4 ${
          changeNavbar ? "text-black" : "text-gray-300"
        }`}
      >
        <p className="hidden md:inline-flex hover:text-red-400 transition-colors cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 hover:text-red-400 transition-colors cursor-pointer"></GlobeAltIcon>
        <div
          onClick={() => setShowNavlinks((prevState) => !prevState)}
          className="flex items-center space-x-2 relative p-2 border-2 rounded-full"
        >
          <MenuIcon className="h-6 cursor-pointer"></MenuIcon>
          <UserCircleIcon className="h-6 cursor-pointer"></UserCircleIcon>
          {showNavlinks && (
            <div className="absolute right-0 top-12 z-[100] w-60 rounded-2xl text-gray-600 font-medium bg-white shadow-md border border-gray-200">
              <div className="py-2 border-b-2">
                <p className="navLink">Sign up</p>
                <p className="navLink">Log In</p>
              </div>
              <div className="py-2">
                <p className="navLink">Host your Home</p>
                <p className="navLink">Host your experience</p>
                <p className="navLink">Help</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3 max-w-full">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={selectionHandler}
          ></DateRangePicker>
          <div
            className={`flex items-center border-b mb-3 ${
              changeNavbar ? "text-black" : "text-gray-300"
            }`}
          >
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5"></UsersIcon>
            <input
              type="number"
              value={noOfGuests}
              min="1"
              onChange={(e) => setNoOfGuests(e.target.value)}
              className={`w-12 pl-2 ml-2 text-lg text-red-400 outline-none ${
                changeNavbar ? "bg-white" : "bg-black"
              }`}
            ></input>
          </div>
          <div className="flex items-center">
            <button
              className="flex-grow text-gray-400"
              onClick={resetInputHandler}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={searchHandler}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
