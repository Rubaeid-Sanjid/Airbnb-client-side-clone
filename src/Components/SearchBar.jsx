import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const SearchBar = ({ handleSearch, searchItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");

  const region = [
    "New York",
    "London",
    "Los Angeles",
    "Portland",
    "Dubai",
  ];

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  console.log(input);
  
  const handleOptionClick = (location) => {
    setInput(location);
  };
  
  return (
    <div className={""}>
      <form
        className={`flex flex-col shadow-lg lg:flex-row rounded-full lg:w-3/4 p-1 mx-auto my-3 ${
          isExpanded ? "lg:border border-none" : "border"
        }`}
      >
        {/* Where input */}
        <label className={`form-control relative`}>
          <div className="label absolute left-7">
            <span className="label-text font-semibold">Where</span>
          </div>
          <input
            type="text"
            placeholder="Search destinations"
            className="input rounded-full px-8 pt-9 pb-4"
            onClick={() => setIsExpanded(!isExpanded)}
            value={input}
            onChange={handleInput}
          />

          {isExpanded && <ul className="menu absolute top-16 bg-base-100 rounded-box z-[10] w-52 p-2 shadow">
            {region.map((location, index) => (
              <li key={index} onClick={() => handleOptionClick(location)}>
                <a>{location}</a>
              </li>
            ))}
          </ul>}
        </label>

        {/* Divider */}
        {/* {isExpanded && <div className="divider lg:divider-horizontal py-2 lg:mx-0"></div>} */}

        {/* Check-in input */}
        <label
          className={`form-control relative ${
            isExpanded ? "block" : "hidden lg:block"
          }`}
        >
          <div className="label absolute left-7">
            <span className="label-text font-semibold">Check in</span>
          </div>
          <input
            type="text"
            placeholder="Add dates"
            className="input rounded-full px-8 pt-9 pb-4"
          />
        </label>

        {/* Divider */}
        {/* {isExpanded && <div className="divider lg:divider-horizontal py-2 lg:mx-0"></div>} */}

        {/* Check-out input */}
        <label
          className={`form-control relative ${
            isExpanded ? "block" : "hidden lg:block"
          }`}
        >
          <div className="label absolute left-7">
            <span className="label-text font-semibold">Check out</span>
          </div>
          <input
            type="text"
            placeholder="Add dates"
            className="input rounded-full px-8 pt-9 pb-4"
          />
        </label>

        {/* Divider */}
        {/* {isExpanded && <div className="divider lg:divider-horizontal py-2 lg:mx-0"></div>} */}

        {/* Who input */}
        <div
          className={`form-control relative ${
            isExpanded ? "block" : "hidden lg:block"
          }`}
        >
          <label className="label absolute left-7">
            <span className="label-text font-semibold">Who</span>
          </label>
          <input
            type="text"
            placeholder="Add guests"
            className="input rounded-full px-8 pt-9 pb-4"
          />
          <button className="absolute right-2 top-1 bg-[#f85255] p-3 rounded-full flex items-center gap-2 text-white">
            <IoSearchOutline size={20} />
            <span
              className={`font-semibold ${isExpanded ? "block" : "hidden"}`}
            >
              Search
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  searchItem: PropTypes.string,
};

export default SearchBar;
