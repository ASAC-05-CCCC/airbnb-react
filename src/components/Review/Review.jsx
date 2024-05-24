import ReviewHeader from './ReviewHeader'
import ReviewContent from './ReviewContent'
import ReviewMoreButton from './ReviewMoreButton'

const commentData = [
  {
    image: './no',
    name: 'Aaron',
    nationality: 'Korean',
    rating: 4.5,
    timeStamp: '2 hours ago',
    message: '안녕하세요.',
  },
  {
    image: './no',
    name: 'Baron',
    nationality: 'American',
    rating: 4.7,
    timeStamp: '3 hours ago',
    message: '반갑습니다',
  },
  {
    image: './no',
    name: 'Caron',
    nationality: 'French',
    rating: 3.9,
    timeStamp: '4 hours ago',
    message: '이상합니다.',
  },
  {
    image: './no',
    name: 'Daron',
    nationality: 'Japanese',
    rating: 4.8,
    timeStamp: '5 hours ago',
    message: '잘가세요.',
  },
  {
    image: './no',
    name: 'Earon',
    nationality: 'Chinese',
    rating: 4.6,
    timeStamp: '6 hours ago',
    message: '좋은 하루 되세요.',
  },
  {
    image: './no',
    name: 'Faron',
    nationality: 'German',
    rating: 4.2,
    timeStamp: '7 hours ago',
    message: '안녕히 계세요.',
  },
  {
    image: './no',
    name: 'Garon',
    nationality: 'Brazilian',
    rating: 4.4,
    timeStamp: '8 hours ago',
    message: '감사합니다.',
  },
  {
    image: './no',
    name: 'Haron',
    nationality: 'Canadian',
    rating: 4.9,
    timeStamp: '9 hours ago',
    message: '좋습니다!',
  },
  {
    image: './no',
    name: 'Iaron',
    nationality: 'Russian',
    rating: 3.8,
    timeStamp: '10 hours ago',
    message: '별로입니다.',
  },
  {
    image: './no',
    name: 'Jaron',
    nationality: 'Indian',
    rating: 4.3,
    timeStamp: '11 hours ago',
    message: '환영합니다.',
  },
]

const Review = () => {
  return (
    <div>
      <hr className='my-4 border-gray-300' />
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full '>
        {commentData.map((comment, index) => {
          if (index > 5) return null
          return (
            <div key={index} className='bg-white p-4 px-2 mr-20'>
              <div className=' mb-10 text-base'>
                <ReviewHeader
                  image={comment.image}
                  name={comment.name}
                  nationality={comment.nationality}
                />
                <ReviewContent
                  rating={comment.rating}
                  timeStamp={comment.timeStamp}
                  message={comment.message}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className='mt-4'>
        <ReviewMoreButton />
      </div>
    </div>
  )
}

export default Review
