import HostHeader from './HostHeader.jsx'
import HostIntro from './HostIntro.jsx'
import HostContent from './HostContent.jsx'
import HostMessageButton from './HostMessageButton.jsx'
import HostFooter from './HostFooter.jsx'
import Language from '../../assets/Language.svg'
import Service from '../../assets/Service.svg'
import HostProfile from './HostProfile.jsx'

const HostProfileData = {
  name: '현아',
  superHost: true,
  review: 16,
  rating: 5,
  career: 9,
}

const HostIntroData = [
  {
    category: 'language',
    icon: Language,
    text: '구사 언어 : 한국어',
  },
  {
    category: 'service',
    icon: Service,
    text: '게스트를위해 노력하는 일',
  },
]

const HostContentData = [
  {
    title: '현아 님은 슈퍼 호스트입니다.',
    body: '슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.',
  },
  {
    title: '호스트 상세 정보',
    body: '응답률: 100\n1시간 이내에 응답',
  },
]

const Host = () => {
  return (
    <div className='flex justify-center px-10'>
      <div className='flex-col max-w-[1000px]'>
        <div>
          <HostHeader />
        </div>
        <div className='flex items-center justify-center  bg-hostColor rounded-2xl flex-auto mx-auto'>
          <div className='pt-10 pb-6'>
            <div className='flex flex-col px-20  lg:flex-row gap-8 lg:gap-12 lg:px-10  justify-start items-center'>
              <div className='flex flex-col lg:gap-8 '>
                <HostProfile
                  name={HostProfileData.name}
                  superHost={HostProfileData.superHost}
                  review={HostProfileData.review}
                  rating={HostProfileData.rating}
                  career={HostProfileData.career}
                />
                <div className='mt-4 lg:mt-0'>
                  {HostIntroData.map(({ category, icon, text }) => {
                    return <HostIntro category={category} icon={icon} text={text} key={category} /> // key 추가
                  })}
                </div>
              </div>
              <div className='flex flex-col w-[340px] lg:w-1/2 lg:gap-8'>
                <div className='sm:w-full'>
                  {HostContentData.map(({ title, body }) => {
                    return <HostContent title={title} body={body} key={title} />
                  })}
                </div>
                <HostMessageButton />
                <HostFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Host
