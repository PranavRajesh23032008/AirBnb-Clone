import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Header = ({ hidden, position }) => {
  const [input, setInput] = useState("");
  const [noOfGuests, setNoOfGuests] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <header
      className={
        "sticky ${position}  md:grid-cols-3  bg-white  z-50 grid grid-flow-row grid-cols-2 shadow-lg p-5 md:px-10"
      }
    >
      <div className={"relative flex h-10 my-auto "}>
        <img
          onClick={() => router.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
          className={"cursor-pointer"}
        />
      </div>
      <div className="inline-flex items-center border-2 rounded-full py-2 shadow-md">
        {" "}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Start your search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:inline-flex h-8 bg-red-400 text-white  rounded-full p-2 cursor-pointer md:mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="hidden  items-center space-x-4 justify-end text-gray-500 md:inline-flex">
        <p
          className={
            "hidden lg:inline-flex py-2 px-4 rounded-full cursor-pointer hover:bg-gray-100 "
          }
        >
          Become a Host
        </p>

        <button
          className={"rounded-full p-2 focus:outline-none hover:bg-gray-100 "}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </button>
        <div className=" transition ease-out duration-300 cursor-pointer hover:shadow-lg flex items-center space-x-2 border-2 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      {input && (
        <div className="flex flex-col col-span-3 mx-auto mt-3 ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              {" "}
              Number of Guests{" "}
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={0}
              className="w-12 pl-2 text-1g outline-none text-red-400"
            />{" "}
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setInput("")}
            >
              Cancel
            </button>{" "}
            <button
              disabled={!noOfGuests}
              onClick={() => {
                router.push({
                  pathname: "/search",
                  query: {
                    location: input,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noOfGuests,
                  },
                });
                setInput("");
                setNoOfGuests(1);
                setStartDate(new Date());
                setEndDate(new Date());
              }}
              className="flex-grow text-red-400"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
