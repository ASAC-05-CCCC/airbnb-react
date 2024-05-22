const Hostintro = ({ category, icon, text }) => {
  return (
    <div className='flex gap-1'>
      <img src={icon} className='w-6 h-6' alt={category} />
      <p>{text}</p>
    </div>
  )
}

export default Hostintro
