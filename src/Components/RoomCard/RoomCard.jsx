import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import './RoomCard.css';


const RoomCard = ({ room }) => {
  const { name, category, images } = room;
  return (
    <div className="card card-compact bg-base-100">
      <figure className="image-container rounded-xl">
        <Swiper modules={[Navigation]} navigation loop={true} className="custom-swiper-nav">
          {images.map((image, index) => (
            <SwiperSlide key={index} className="h-72 w-full overflow-hidden flex justify-center items-center">
              <img src={image} alt="" className="h-full w-full object-cover"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
      </div>
    </div>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object,
};

export default RoomCard;
