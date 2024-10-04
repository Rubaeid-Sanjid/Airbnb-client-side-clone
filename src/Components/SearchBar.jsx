import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const SearchBar = ({ handleSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDateExpanded, setIsDateExpanded] = useState(false);
  const [isGuestExpanded, setIsGuestExpanded] = useState(false);

  const [input, setInput] = useState("");
  const [guestInput, setGuestInput] = useState("");

  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [petsCount, setPetsCount] = useState(0);

  const region = ["New York", "London", "Los Angeles", "Portland", "Dubai"];

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const searchData = {
    input,
    checkInDate: dateRange[0].startDate.toLocaleDateString(),
    checkOutDate: dateRange[0].endDate.toLocaleDateString(),
    guestInput,
  };

  const sendSearchData = (e) => {
    e.preventDefault();
    handleSearch(searchData);
    setIsExpanded(false);
    setIsDateExpanded(false);
    setIsGuestExpanded(false);
  };
  console.log(searchData);
  return (
    <div className={""}>
      <form
        onSubmit={sendSearchData}
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
            onChange={(e) => setInput(e.target.value)}
          />

          {isExpanded && (
            <ul className="menu absolute top-16 bg-base-100 rounded-box z-[10] w-52 p-2 shadow">
              {region.map((location, index) => (
                <li key={index} onClick={() => setInput(location)}>
                  <a>{location}</a>
                </li>
              ))}
            </ul>
          )}
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
            onClick={() => setIsDateExpanded(!isDateExpanded)}
            value={dateRange[0].startDate.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
            readOnly
          />
        </label>

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
            onClick={() => setIsDateExpanded(!isDateExpanded)}
            value={dateRange[0].endDate.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
            })}
            readOnly
          />
        </label>

        {/* Calender */}
        {isDateExpanded && (
          <DateRangePicker
            onChange={(range) => setDateRange([range.selection])}
            showSelectionPreview={false}
            moveRangeOnFirstSelection={false}
            months={2}
            showDateDisplay={false}
            ranges={dateRange}
            direction="horizontal"
            staticRanges={[]} // Remove predefined range options
            inputRanges={[]} // Remove custom date input ranges
            className="menu absolute top-[25%] left-[25%] bg-base-100 rounded-box z-[10] p-2 shadow"
          />
        )}

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
            value={guestInput}
            onClick={() => setIsGuestExpanded(!isGuestExpanded)}
            readOnly
          />
          {isGuestExpanded && (
            <ul className="menu absolute top-16 bg-base-100 rounded-box z-[10] w-full p-2 shadow">
              <li
                onClick={() =>
                  setGuestInput(1 + adultCount + childrenCount + " guests, ")
                }
              >
                <div className="flex border-b pb-4 w-full justify-between">
                  <div className="flex flex-col items-start">
                    <h4 className="text-lg font-semibold">Adult</h4>
                    <h4 className="">Ages 13 or above</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiCircleMinus
                      size={30}
                      onClick={() => setAdultCount(adultCount - 1)}
                    />
                    <h4>{adultCount}</h4>
                    <CiCirclePlus
                      size={30}
                      onClick={() => setAdultCount(adultCount + 1)}
                    />
                  </div>
                </div>
              </li>

              <li
                onClick={() =>
                  setGuestInput(1 + adultCount + childrenCount + " guests, ")
                }
              >
                <div className="flex border-b pb-4 w-full justify-between">
                  <div className="flex flex-col items-start">
                    <h4 className="text-lg font-semibold">Children</h4>
                    <h4 className="">Ages 2 – 12</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiCircleMinus
                      size={30}
                      onClick={() => setChildrenCount(childrenCount - 1)}
                    />
                    <h4>{childrenCount}</h4>
                    <CiCirclePlus
                      size={30}
                      onClick={() => setChildrenCount(childrenCount + 1)}
                    />
                  </div>
                </div>
              </li>

              <li
                onClick={() =>
                  setGuestInput(
                    adultCount +
                      childrenCount +
                      " guests, " +
                      (petsCount + 1) +
                      " pets"
                  )
                }
              >
                <div className="flex border-b pb-4 w-full justify-between">
                  <div className="flex flex-col items-start">
                    <h4 className="text-lg font-semibold">Pets</h4>
                    <h4 className="">Bringing a service animal?</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiCircleMinus
                      size={30}
                      onClick={() => setPetsCount(petsCount - 1)}
                    />
                    <h4>{petsCount}</h4>
                    <CiCirclePlus
                      size={30}
                      onClick={() => setPetsCount(petsCount + 1)}
                    />
                  </div>
                </div>
              </li>
            </ul>
          )}
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
};

export default SearchBar;
