import { useQuery } from '@tanstack/react-query'

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
        <div>
            <h2>All Cards {rooms.length}</h2>
        </div>
    );
};

export default CardsSection;