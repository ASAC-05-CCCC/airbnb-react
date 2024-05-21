const Review = ({ image, name, nationality}) => {
  return <div  className="flex-col items-start space-x-4 mb-4">
    <div className="flex items-center space-x-4">
        <img src={image} className="bg-green-200 w-10 h-10 rounded-full"/>
        <div className='bg-yellow-200'>
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">{nationality}</p>
        </div>
      </div>
  </div>
}

export default Review
