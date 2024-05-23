import GuestItem from './GuestItem'

const GuestList = ({ list }) => {
  return (
    <ul className='flex flex-col w-full gap-5 p-4'>
      {list.map((each, idx) => {
        return <GuestItem key={idx} item={each} />
      })}
    </ul>
  )
}

export default GuestList
