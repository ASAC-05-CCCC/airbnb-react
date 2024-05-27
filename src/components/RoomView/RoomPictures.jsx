import React from 'react'
import RoomListIcon from '../../assets/RoomViewSvg/RoomList.svg'
import RoomImage1 from '../../assets/RoomViewImg/RoomImage1.png'
import RoomImage2 from '../../assets/RoomViewImg/RoomImage2.png'
import RoomImage3 from '../../assets/RoomViewImg/RoomImage3.png'
import RoomImage4 from '../../assets/RoomViewImg/RoomImage4.png'
import RoomImage5 from '../../assets/RoomViewImg/RoomImage5.png'

const RoomPictures = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/2 p-1">
        <img src={RoomImage1} alt="Large view" className="w-full h-auto rounded-lg rounded-tl-lg" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 flex flex-wrap">
        <div className="w-full md:w-1/2 p-1">
          <img src={RoomImage2} alt="View 1" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 p-1">
          <img src={RoomImage3} alt="View 2" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 p-1">
          <img src={RoomImage4} alt="View 3" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 p-1 relative">
          <img src={RoomImage5} alt="View 4" className="w-full h-auto rounded-lg" />
          <button className="absolute bottom-5 right-5 flex items-center justify-center bg-white text-lg rounded-lg border border-black px-4 py-0.5">
            <img src={RoomListIcon} alt="RoomList" className="w-3 h-3 mr-2" />
            사진 모두 보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomPictures