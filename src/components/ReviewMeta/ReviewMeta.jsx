import ReviewMetaContent from './ReviewMetaContent'
import ReviewOverall from './ReviewOverall'
import CleanlinessIcon from '../../assets/Cleanliness.svg'
import AccuracyIcon from '../../assets/Accuracy.svg'
import CheckInIcon from '../../assets/CheckIn.svg'
import CommunicationIcon from '../../assets/Communication.svg'
import LocationIcon from '../../assets/Location.svg'
import ValueIcon from '../../assets/Value.svg'

const ReviewMetaData = [
  { category: '청결도', value: 5.0, icon: CleanlinessIcon },
  { category: '정확도', value: 4.9, icon: AccuracyIcon },
  { category: '체크인', value: 5.0, icon: CheckInIcon },
  { category: '의사소통', value: 5.0, icon: CommunicationIcon },
  { category: '위치', value: 4.9, icon: LocationIcon },
  { category: '가격 대비 만족도', value: 4.9, icon: ValueIcon },
]

const ReviewMeta = () => {
  return (
    <div className='flex gap-4 pb-4 mb-4 '>
      <ReviewOverall />
      {ReviewMetaData.map(({ category, value, icon }, index) => (
        <ReviewMetaContent key={index} category={category} value={value} icon={icon} />
      ))}
    </div>
  )
}

export default ReviewMeta
