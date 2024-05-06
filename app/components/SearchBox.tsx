import Image from 'next/image';

export function SearchBox() {
  return (
    <div className='bg-[#CAE9FF] pt-20 pb-40 flex justify-center flex-col items-center'>
      <h1 className='font-bold text-4xl text-center leading-[3.25rem] mb-10'>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h1>
      <div className=' w-full flex max-w-md py-3 px-6 border-2 border-solid border-white bg-white rounded-[2.6rem]'>
        <div className='flex items-center flex-1'>
          <div>
            <Image
              src={'/icons/ic_search.svg'}
              alt='search'
              width={16}
              height={16}
            />
          </div>
          <input
            className=' w-full focus:outline-none  caret-[#1976D2] '
            id='search_bar_main'
          />
        </div>
        <button className='bg-[#007BE9] rounded-full w-12 h-12 flex justify-center items-center'>
          <Image
            src={'/icons/ic_search.svg'}
            alt='search button'
            width={21}
            height={21}
          />
        </button>
      </div>
    </div>
  );
}
