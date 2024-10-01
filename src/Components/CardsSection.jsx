import { useQuery } from '@tanstack/react-query'
import RoomCard from './RoomCard/RoomCard';

const CardsSection = () => {
    const { isPending, error, data: rooms = []} = useQuery({
        queryKey: ['rooms'],
        queryFn: async ()=>{
          const res = await fetch('../public/rooms.json')
          return res.json()
        }
      })

      if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 px-3 lg:px-10'>
            {
                rooms.map(room => <RoomCard key={room.id} room={room}></RoomCard>)
            }
        </div>
    );
};

export default CardsSection;