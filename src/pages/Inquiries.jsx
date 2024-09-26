import EmptyState from '../components/MessageComponents/EmptyState'


const Inquiries = () => {
  return (
    <div className='text-[#3A3E3F] px-2 md:px-8 py-[25px]'>
        <div>
            <ul className='flex gap-6 py-2'>
                <li className=' font-medium text-[20px] tracking-[-0.75px] leading-7 border-b-[4px] border-b-[#389294]'>All(23)</li>
                <li className=' font-medium text-[20px] tracking-[-0.75px] leading-7'>Unread(0)</li>
                <li className=' font-medium text-[20px] tracking-[-0.75px] leading-7'>Read(0)</li>
            </ul>
        </div>
        <EmptyState/>
        </div>
  )
}

export default Inquiries