import { useState } from 'react';
import userProfilePic from '../../assets/beyzanur-k-c0v4OukAiJs-unsplash.jpg'
import OnpagePic from '../../assets/Frame 1618869079 (1).png'
import { users,messages } from './user';
import sendButton from '../../assets/Component 9.png'
import shareBtn from '../../assets/tdesign_attach.png' 
import call from '../../assets/call.png'

const OnPage = () => {
    const [isActive, setIsActive] = useState(true);
    const [selectUser, setSelectUser] = useState(null);
    const [selectMessage, setSelectMessage] = useState(false);
    const onSelectUser = (user) =>{
        setSelectUser(user);
        setSelectMessage(true);
    }
  return (
    <div className='bg-white min-h-[525px] rounded-2xl border messages flex '>
        <div className='w-[365px] border-r-[3px] border-[#F5F6F6]  overflow-y-auto px-2 flex flex-col gap-3'>
                {
                    users.map(user=>(
                        <div key={user.id} className='flex gap-1 cursor-pointer ' onClick={()=>onSelectUser(user)}>
                <div className=''>
                <div className='size-[51px]  rounded-full border relative'>
                    <img src={userProfilePic} alt=""  className='w-full h-full rounded-full  '/>
                    <div className={`absolute size-[8.95px] bg-gray-500 rounded right-0 bottom-1 ${user.status && 'bg-[#5FC92E]'}`}></div>
                </div>
                </div>

                <div>
                    <h6 className='font-medium text-[18px] leading-6 tracking-[-0.5px]'>{user.name}</h6>
                    <p className='text-[#828E8E] font-medium text-[16px] leading-6 tracking-[-0.5px]'>What is the size of the kitchen and
                    What is the size of the kitchen and...</p>
                </div>
            </div>
                    ))
                }

          
            
        </div>

        <div className={`basis-[75%]  ${!selectMessage && 'flex items-center justify-center'}`}>
                { selectMessage ?
                <div className="flex-grow bg-white h-full  py-1  flex flex-col">
      <div className="flex items-center pb-4 border-b px-2">
        <img src={userProfilePic} alt={selectUser?.name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="font-semibold text-lg">{selectUser?.name}</h3>
          <p className="text-sm flex items-end gap-2"><img src={call} alt="" />{selectUser?.phone}</p>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto mt-4 px-2">
        
        <div className='flex flex-col even:items-end relative'>
            
        {messages.map((message) => (
            <div key={message.id} className='mt-2 '>
                <div className='flex gap-2 '>
                <div >
                    <div><img src={userProfilePic} alt="" className='size-[51px] rounded-full'/></div>
                </div>
                
                <div>
                    <div>
                    <span className='text-[#828E8E] font-medium text-[16px] leading-6 tracking-[-0.5px]'>John James </span>
                    <span className='text-[#828E8E] font-medium text-[16px] leading-6 tracking-[-0.5px]'> . 8:41pm</span>
                    <p className={`my-2 p-3 h-[64px] rounded-lg flex  odd:bg-[#FFFFEA]  even:bg-[#D6F1EF]  max-w-[500px]`} >{message.text}</p> 
                    </div>
                </div>
                </div>
                
          {/* <div className={`my-2 p-3 h-[64px] rounded-lg flex  odd:bg-[#FFFFEA]  even:bg-[#D6F1EF]   max-w-[500px] `} >
            <p className='h-full w-full'>{message.text}</p>  
          </div> */}
          </div>
        ))}
      </div>
      </div>

      <div className="mt-4 flex  bg-[#F5F6F6] gap-3 px-2">
        <input 
          type="text" 
          placeholder="Write a message..." 
          className="flex-grow p-2  rounded-l-lg border-0 bg-[#F5F6F6] focus:outline-none "
        />

        <button className="bg-[#F5F6F6]"><img src={shareBtn} alt="" /></button>
        <button className='bg-[#F5F6F6]'><img src={sendButton} alt="" /></button>
      </div>
    </div>
    :
    <img src={OnpagePic} alt="" />
}
        </div>

    </div>
  )
}

export default OnPage