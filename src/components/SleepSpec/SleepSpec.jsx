import React from 'react'
import queenBed from '../../assets/SleepSpecSvg/queenBed.svg'
import singleBed from '../../assets/SleepSpecSvg/singleBed.svg'

const SleepSpec = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="border-b pb-8">
        <h2 className="text-2xl font-bold mb-4">숙박 장소</h2>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="border p-4 rounded-lg flex flex-col items-left justify-center aspect-square">
              <div className='flex items-center mb-4'>
                <img src={queenBed} alt="Queen Bed" className='w-6 h-6 mr-2' />
                <img src={queenBed} alt="Queen Bed" className='w-6 h-6' />
              </div>
              <h3 className="text-xl font-semibold">침실 1</h3>
              <p>퀸사이즈 침대 2개</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="border p-4 rounded-lg flex flex-col items-left justify-center aspect-square">
              <div className='flex items-center mb-4'>
                <img src={queenBed} alt="Queen Bed" className='w-6 h-6 mr-2' />
                <img src={singleBed} alt="Single Bed" className='w-6 h-6' />
              </div>
              <h3 className="text-xl font-semibold">침실 2</h3>
              <p>퀸사이즈 침대 1개,</p>
              <p>싱글 침대 1개</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SleepSpec
