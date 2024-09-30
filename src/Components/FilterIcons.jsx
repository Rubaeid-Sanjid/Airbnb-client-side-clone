import PropTypes from "prop-types";

const FilterIcons = ({ iconTag }) => {
  const { name, icon } = iconTag;
  return (
    <button className="flex flex-col items-center gap-3 pb-2 border-b-2">
      <h3 className="text-2xl">{icon}</h3>
      <h3>{name}</h3>
      {/* <h3>{type}</h3> */}
    </button>
  );
};

FilterIcons.propTypes = {
  iconTag: PropTypes.object
};

export default FilterIcons;
