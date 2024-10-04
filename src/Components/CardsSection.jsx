import { useQuery } from '@tanstack/react-query'
import RoomCard from './RoomCard/RoomCard';
import axios from 'axios';
import PropTypes from "prop-types";

const CardsSection = ({filterItem, searchItem}) => {

  const {input, checkInDate, checkOutDate, guestInput} = searchItem;

    const { isPending, error, data: rooms = []} = useQuery({
        queryKey: ['rooms', filterItem],
        queryFn: async ()=>{
          const res = await axios.get(`http://localhost:5000/rooms?category=${filterItem}&location=${input}&checkIn=${checkInDate}&checkOut=${checkOutDate}&guest=${guestInput}`)
          return res.data
        }
      })

      if (isPending) return 'Loading...'
console.log(rooms.length);

  if (error) return 'An error has occurred: ' + error.message
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 px-3 lg:px-10'>
            {
                rooms.map(room => <RoomCard key={room.id} room={room}></RoomCard>)
            }
        </div>
    );
};
CardsSection.propTypes = {
    filterItem: PropTypes.string,
    searchItem: PropTypes.object
  };

export default CardsSection;