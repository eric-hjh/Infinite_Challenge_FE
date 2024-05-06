import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='w-full justify-center flex'>
      <div className='flex w-full justify-between px-5 py-4 max-w-5xl'>
        <Link href={'/'}>
          <Image
            src='/icons/ic_korea_clinical_information.svg'
            width={126}
            height={24}
            alt='korea_info'
          />
        </Link>
        <Link className='text-lg' href={'/favorites'}>
          즐겨찾기
        </Link>
      </div>
    </div>
  );
}
