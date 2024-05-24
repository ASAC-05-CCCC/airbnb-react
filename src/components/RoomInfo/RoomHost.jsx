import React from 'react'
import Onda from '../../assets/RoomInfoImg/ONDA.png'

const RoomHost = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <div className="border-t border-gray-300 pt-4">
        <div className="flex items-center space-x-3">
          <button>
            <img src={Onda} className='w-10 h-10' />
          </button>
          <div>
            <p className="font-bold">호스트: Onda 님</p>
            <p className="text-gray-600">호스팅 경력 1년</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomHost