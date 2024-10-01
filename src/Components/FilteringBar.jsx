import FilterIcons from "./FilterIcons";
import {
  IoBusiness,
  IoBed,
  IoEarth,
  IoHome,
  IoSunny,
  IoWater,
  IoDiamond,
  IoBoat,
  IoSkull,
  IoCarSport,
  IoWine,
  IoBasketball,
  IoSnow,
  IoRestaurant,
} from "react-icons/io5";
import {
  GiIsland,
  GiFarmTractor,
  GiTreehouse,
  GiMountains,
  GiMountainCave,
  GiWineGlass,
  GiGolfFlag,
  GiCampingTent,
  GiForest,
  GiFishingPole,
  GiCastle,
} from "react-icons/gi";
import { LiaTicketAltSolid } from "react-icons/lia";
import { FaRegSnowflake } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const FilteringBar = () => {
  const categories = [
    {
      id: 1,
      name: "Icons",
      icon: <LiaTicketAltSolid />,
      type: "icon",
    },
    {
      id: 2,
      name: "Rooms",
      icon: <IoBed />,
      type: "room",
    },
    {
      id: 3,
      name: "Countryside",
      icon: <IoEarth />,
      type: "nature",
    },
    {
      id: 4,
      name: "Cabin",
      icon: <IoHome />,
      type: "cabin",
    },
    {
      id: 5,
      name: "Island",
      icon: <GiIsland />,
      type: "island",
    },

    {
      id: 6,
      name: "Beachfront",
      icon: <IoSunny />,
      type: "beach",
    },
    {
      id: 7,
      name: "Lakefront",
      icon: <IoWater />,
      type: "lake",
    },
    {
      id: 8,
      name: "Tiny Homes",
      icon: <IoHome />,
      type: "tiny_home",
    },
    {
      id: 9,
      name: "Farm Stay",
      icon: <GiFarmTractor />,
      type: "farm",
    },
    {
      id: 10,
      name: "Luxury",
      icon: <IoDiamond />,
      type: "luxury",
    },
    {
      id: 11,
      name: "Treehouse",
      icon: <GiTreehouse />,
      type: "treehouse",
    },
    {
      id: 12,
      name: "Boat",
      icon: <IoBoat />,
      type: "boat",
    },
    {
      id: 13,
      name: "Desert",
      icon: <IoSunny />,
      type: "desert",
    },
    {
      id: 14,
      name: "Mountain",
      icon: <GiMountains />,
      type: "mountain",
    },
    {
      id: 15,
      name: "Urban",
      icon: <IoBusiness />,
      type: "urban",
    },
    {
      id: 16,
      name: "Arctic",
      icon: <FaRegSnowflake />,
      type: "arctic",
    },
    {
      id: 17,
      name: "Cave",
      icon: <GiMountainCave />,
      type: "cave",
    },
    {
      id: 18,
      name: "City Tours",
      icon: <IoCarSport />,
      type: "city_tours",
    },
    {
      id: 19,
      name: "Restaurants",
      icon: <IoRestaurant />,
      type: "restaurant",
    },
    {
      id: 20,
      name: "Historical Sites",
      icon: <GiCastle />,
      type: "historical",
    },
    {
      id: 21,
      name: "Fishing Trips",
      icon: <GiFishingPole />,
      type: "fishing",
    },
    {
      id: 22,
      name: "Haunted Places",
      icon: <IoSkull />,
      type: "haunted",
    },
    {
      id: 23,
      name: "Forest Retreats",
      icon: <GiForest />,
      type: "forest",
    },
    {
      id: 24,
      name: "Camping",
      icon: <GiCampingTent />,
      type: "camping",
    },
    {
      id: 25,
      name: "Golf Resorts",
      icon: <GiGolfFlag />,
      type: "golf",
    },
    {
      id: 26,
      name: "Ski Resorts",
      icon: <IoSnow />,
      type: "ski_resort",
    },
    {
      id: 27,
      name: "Sports Activities",
      icon: <IoBasketball />,
      type: "sports",
    },
    {
      id: 28,
      name: "Wine Tasting",
      icon: <GiWineGlass />,
      type: "wine_tasting",
    },
    {
      id: 29,
      name: "Luxury Dining",
      icon: <IoWine />,
      type: "luxury_dining",
    },
    {
      id: 30,
      name: "Adventure Parks",
      icon: <IoCarSport />,
      type: "adventure_park",
    },
    {
      id: 31,
      name: "Extreme Sports",
      icon: <IoSkull />,
      type: "extreme_sports",
    },
  ];

  return (
    <div className="my-6 border-y p-6 flex items-center gap-6">
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={8}
        navigation
        className="w-2/3 flex-grow px-6"
        // breakpoints={{
        //   320: {
        //     slidesPerView: 4,
        //     spaceBetween: 10,
        //   },
        //   640: {
        //     slidesPerView: 6,
        //     spaceBetween: 15,
        //   },
        //   768: {
        //     slidesPerView: 8,
        //     spaceBetween: 20,
        //   },
        //   1024: {
        //     slidesPerView: 10,
        //     spaceBetween: 10,
        //   },
        // }}
      >
        {categories.map((icon) => (
          <SwiperSlide key={icon.id}>
            <FilterIcons iconTag={icon} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Filter button */}
      <button className="flex gap-3 items-center p-3 border rounded-xl font-medium">
        <VscSettings />
        <span>Filters</span>
      </button>

      {/* Toggle bar */}
      <div className="flex gap-3 items-center p-3 border rounded-xl cursor-pointer font-medium">
        <span className="label-text">Display total before taxes</span>
        <input type="checkbox" className="toggle" />
      </div>
    </div>
  );
};

export default FilteringBar;
