import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div className="flex border rounded-full w-3/4 p-1 mx-auto my-3">
      <label className={`form-control relative`}>
        <div className="label absolute left-7">
          <span className="label-text font-semibold">Where</span>
        </div>
        <input
          type="text"
          placeholder="Search destinations"
          className="input rounded-full px-8 pt-9 pb-4"
        />
      </label>

      <div className="divider lg:divider-horizontal py-2 lg:mx-0"></div>

      <label className="form-control relative">
        <div className="label absolute left-7">
          <span className="label-text font-semibold">Check in</span>
        </div>
        <input
          type="text"
          placeholder="Add dates"
          className="input rounded-full px-8 pt-9 pb-4"
        />
      </label>

      <div className="divider lg:divider-horizontal py-2 lg:mx-0"></div>
      
      <label className="form-control relative">
        <div className="label absolute left-7">
          <span className="label-text font-semibold">Check out</span>
        </div>
        <input
          type="text"
          placeholder="Add dates"
          className="input rounded-full px-8 pt-9 pb-4"
        />
      </label>

      <div className="divider lg:divider-horizontal py-2 lg:mx-0"></div>

      <div className="form-control relative" onClick={()=>setShowText(!showText)} >
        <label className="label absolute left-7">
          <span className="label-text font-semibold">Who</span>
        </label>
        <input
          type="text"
          placeholder="Add guests"
          className="input rounded-full px-8 pt-9 pb-4 "
        />
        <button className="absolute right-2 top-1 bg-[#f85255] p-3 rounded-full flex items-center gap-2 text-white">
          <IoSearchOutline size={20} />
          <span className={`font-semibold ${showText ? "block" : "hidden"}`}>
            Search
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
