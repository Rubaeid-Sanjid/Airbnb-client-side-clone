import PropTypes from "prop-types";
// import { useState } from "react";

const FilterIcons = ({ iconTag, filterItem, handleFilter }) => {
  const { name, icon, type } = iconTag;
// const [selectedIcon, setSelectedIcon] = useState();
// console.log(filterItem, type);

  return (
    <button onClick={()=>handleFilter(type)} className={`flex flex-col items-center gap-3 pb-2 ${filterItem === type ? 'border-b-2 border-black' : 'border-b-0'} `}>
      <h3 className="text-2xl">{icon}</h3>
      <h3>{name}</h3>
      {/* <h3>{type}</h3> */}
    </button>
  );
};

FilterIcons.propTypes = {
  iconTag: PropTypes.object,
  filterItem: PropTypes.string,
  handleFilter: PropTypes.func
};

export default FilterIcons;
