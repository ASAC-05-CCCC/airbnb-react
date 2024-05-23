import React from 'react'
import selfCheckIn from '../../assets/RoomInfoSvg/selfCheckIn.svg'
import greatLocation from '../../assets/RoomInfoSvg/greatLocation.svg'
import smoothCheckIn from '../../assets/RoomInfoSvg/smoothCheckIn.svg'

const InfoDetail = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <div className="border-t border-gray-300 pt-4 space-y-4">
        <div className="flex items-center space-x-5">
          <img src={selfCheckIn} />
          <div>
            <p className="font-bold">셀프 체크인</p>
            <p className="text-gray-600">건물 직원의 도움을 받아 체크인하실 수 있습니다.</p>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <img src={greatLocation} />
          <div>
            <p className="font-bold">훌륭한 숙소 위치</p>
            <p className="text-gray-600">최근 숙박한 게스트 중 100%가 위치에 별점 5점을 준 숙소입니다.</p>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <img src={smoothCheckIn} />
          <div>
            <p className="font-bold">순조로운 체크인 과정</p>
            <p className="text-gray-600">최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준 숙소입니다.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoDetail