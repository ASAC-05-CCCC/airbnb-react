import React from 'react'
import PlaceCardInfo from './PlaceCardInfo'
import PlaceCardImageList from './PlaceCardImageList'
import { accommodations } from '../data/accommodations'

// 전체 장소 리스트
const PlaceList = () => {
  return (
    <div className='place-list mx-auto mt-4 mb-16 flex flex-wrap justify-center gap-4 px-10'>
      {accommodations.map(place => (
        <div key={place._id} className='mb-6'>
          <PlaceCardImageList photos={place.photos} />
          <PlaceCardInfo
            id={place._id}
            location={place.location}
            rating={place.rating}
            distance={place.distance}
            dates={place.dates}
            price={place.price}
          />
        </div>
      ))}
    </div>
  )
}
export default PlaceList
