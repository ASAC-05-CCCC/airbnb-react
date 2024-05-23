import React from 'react'
import shareIcon from '../../assets/share.svg'
import saveIcon from '../../assets/store.svg'

const RoomTitle = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end">
        <h1 className="text-3xl font-bold leading-snug sm:max-w-2xl">태안에서 반려견과 함께 즐겁게 보낼 수 있는 위드독 독채 풀빌라(스파, 애견)</h1>
        <div className="flex space-x-4 sm:mt-0 sm:ml-4 min-w-fit">
        <button className="flex items-center underline">
            <img src={shareIcon} alt="Share" className="w-3 h-3 mr-1" />
            공유하기
          </button>
          <button className="flex items-center underline">
            <img src={saveIcon} alt="Save" className="w-3 h-3 mr-1" />
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomTitle