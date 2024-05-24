import ReviewMetaContent from './ReviewMetaContent'
import ReviewOverall from './ReviewOverall'
import CleanlinessIcon from '../../assets/Cleanliness.svg'
import AccuracyIcon from '../../assets/Accuracy.svg'
import CheckInIcon from '../../assets/CheckIn.svg'
import CommunicationIcon from '../../assets/Communication.svg'
import LocationIcon from '../../assets/Location.svg'
import ValueIcon from '../../assets/Value.svg'
import Review from '../../../public/json/Review.json'

const ReviewMetaData = [
  { category: '청결도', value: 5.0, icon: CleanlinessIcon },
  { category: '정확도', value: 4.9, icon: AccuracyIcon },
  { category: '체크인', value: 5.0, icon: CheckInIcon },
  { category: '의사소통', value: 5.0, icon: CommunicationIcon },
  { category: '위치', value: 4.9, icon: LocationIcon },
  { category: '가격 대비 만족도', value: 4.9, icon: ValueIcon },
]

const ratings = [
  { stars: 5, percentage: 100 },
  { stars: 4, percentage: 80 },
  { stars: 3, percentage: 60 },
  { stars: 2, percentage: 40 },
  { stars: 1, percentage: 20 },
]

const ReviewMeta = () => {
  return (
    <div className='flex pb-4 mb-4'>
      <ReviewOverall ratings={ratings} />
      {ReviewMetaData.map(({ category, value, icon }, index) => (
        <ReviewMetaContent key={index} category={category} value={value} icon={icon} />
      ))}
    </div>
  )
}

export default ReviewMeta
