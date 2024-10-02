import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./RoomCard.css";
import { FaRegHeart } from "react-icons/fa";

const RoomCard = ({ room }) => {
  const {
    name,
    category,
    destination,
    checkIn,
    checkOut,
    pricePerNight,
    images,
    rating,
    review
  } = room;

  const formatDateRange = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    console.log(checkInDate, checkOutDate);

    const options = { month: "short", day: "numeric" };

    const checkInFormatted = new Intl.DateTimeFormat("en-US", options).format(
      checkInDate
    );
    const checkOutFormatted = new Intl.DateTimeFormat("en-US", options).format(
      checkOutDate
    );

    console.log(checkInFormatted, checkOutFormatted);

    const checkInMonth = checkInDate.getMonth();
    const checkOutMonth = checkOutDate.getMonth();

    if (checkInMonth === checkOutMonth) {
      return `${
        checkInFormatted.split(" ")[0]
      } ${checkInDate.getDate()} - ${checkOutDate.getDate()}`;
    } else {
      return `${checkInFormatted} - ${checkOutFormatted}`;
    }
  };

  return (
    <div className="card card-compact bg-base-100">
      <figure className="image-container rounded-xl relative">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          className="custom-swiper-nav"
        >
      {review && <span className="badge absolute z-10 top-3 left-3 text-[16px] font-medium p-3">{review}</span>}
      <FaRegHeart className="absolute z-10 top-3 right-3 text-white" size={20}/>
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="h-72 w-full overflow-hidden flex justify-center items-center"
            >
              <img src={image} alt="" className="h-full w-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </figure>
      <div className="mt-2">
        <div className="flex justify-between">
          <h2 className="text-lg font-medium">{destination}</h2>
          <h2 className="rating rating-sm flex items-center gap-1">
            <input type="radio" readOnly name="rating-0" className="mask mask-star" />
            <span className="text-[16px] ">{rating}</span>
          </h2>
        </div>
        <h3 className="text-[16px] text-gray-600">{name}</h3>
        <h3 className="text-[16px] text-gray-600">
          {formatDateRange(checkIn, checkOut)}
        </h3>
        <h3 className="text-[16px] font-medium">${pricePerNight} night</h3>
      </div>
    </div>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object,
};

export default RoomCard;
