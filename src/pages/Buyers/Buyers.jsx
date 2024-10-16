import BuyersNavbar from './BuyersNavbar'
import Buyersfooter from './Buyersfooter'
import searchIcon from '../../assets/icons/Vector.svg'
import location from '../../assets/icons/location.svg'
import { useState,useEffect } from 'react'
import Instance2 from '../../http/Instaance2'
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom'


const Buyers = () => {
    const [allProperties, setAllProperties] = useState([])
    const [page,setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')

    const handleChange = (event, value) => {
        setPage(value); // Update page number
        console.log(value)
      };

     const handleSearch =  (e) =>{
        setSearchQuery(e.target.value)
        
     }

    useEffect(()=>{
        const getProperties = async() =>{
            if(searchQuery === ''){
            try {
                const res = await Instance2.get(`properties?page=${page}`)
                console.log(res.data.properties)
                setAllProperties(res.data.properties)
                setTotalPages(res.data.totalPages)
            } catch (error) {
                console.log(error)
            }
        }else{
            try {
                const res = await Instance2.get(`/properties/search?city=${searchQuery}`) 
                setAllProperties(res.data.data)
                    console.log(res.data.data)
              } catch (error) {
                console.log(error)
              }
        }}
        getProperties()
    
    },[page,searchQuery])
  return (
    <div className='bg-white min-h-screen'>
        <BuyersNavbar />
          <header className="h-[300px] bg-no-repeat bg-center bg-cover top-banner">
            <div className='flex h-full justify-center items-center'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-[#FAFDFE] font-semibold text-[60px] leading-[64px] tracking-[-1px]'>Property Listings</h1>
                <div className='relative'>
                <img src={searchIcon} alt=""  className='absolute bottom-3 left-1'/>
                <input type="text" onChange={handleSearch} className='w-full px-8 py-[10px] rounded-lg border border-[#828E8E] bg-transparent text-white outline-none placeholder:text-[18px] placeholder:leading-6 placeholder:tracking-[-0.5px] placeholder:text-[#CED3D3]' placeholder='Search Property' />
                </div>
            </div>
            </div>
          </header>

          <main className='w-[1200px] mx-auto my-24 flex flex-col gap-6'>
            <div>
                <ul className='flex items-center gap-6'>
                    <li className='px-[24px] py-[8px] rounded-[100px] w-fit h-[40px] bg-[#3F86FA] cursor-pointer font-medium text-[16px] leading-6 tracking-[-0.5px] text-white'>All</li>
                    <li className='px-[24px] py-[8px] rounded-[100px] w-fit h-[40px] bg-[#F3F7FF] cursor-pointer font-medium text-[16px] leading-6 tracking-[-0.5px] text-[#242828]'>House</li>
                    <li className='px-[24px] py-[8px] rounded-[100px] w-fit h-[40px] bg-[#F3F7FF] cursor-pointer font-medium text-[16px] leading-6 tracking-[-0.5px] text-[#242828]'>Land</li>
                    <li className='px-[24px] py-[8px] rounded-[100px] w-fit h-[40px] bg-[#F3F7FF] cursor-pointer font-medium text-[16px] leading-6 tracking-[-0.5px] text-[#242828]'>Commercial</li>
                    
                </ul>
            </div>

            <div className='grid grid-cols-3 gap-6'>
                 {allProperties?.map(property=>(
                    <Link className='w-[384px] h-[450px] cursor-pointer ' key={property.id} to={`/properties/buyers/${property.id}`} >
                        <div className='h-[278px] '>
                            <img src="/buyers/istockphoto-1026205392-612x612.jpg" className='w-full h-full object-cover' alt="Image of property" />
                        </div>
                        <div className='bg-[#3F86FA] h-[172px] text-[#FCFDFD] py-[24px] px-2 text-center'>
                            <h3 className='text-[18px] font-semibold  leading-6 tracking-[-0.5px]'>{property.name}</h3>
                            <div className='flex gap-2 justify-center items-center'><img src={location} alt="" /> <span className='font-medium  text-[16px] leading-6 tracking-[-0.5px]'>{property.address}</span></div>
                            <div className='leading-5 text-[14px] font-medium text-[#F5F6F6]'><span className='border-r px-1'>{property.number_of_bedrooms || 0} Beds </span>  <span className='border-r px-1'>{property.number_of_bathrooms || 0} Baths</span> <span className=' px-1'>{property.squaremeters} Sq.m</span></div>
                            <p className='text-[#FCFDFD] text-[22px] font-semibold  leading-[32px] tracking-[-0.75px]'>₦ {property.price}</p>
                        </div>
                    </Link>
                 ))} 
            </div>
          </main>

          <div className='w-fit mx-auto mb-24'>
          <Pagination  count={totalPages} onChange={handleChange} page={page} variant="outlined" shape="rounded" />
          </div>

        <Buyersfooter />
        </div>
  )
}
 
export default Buyers





// import BuyersNavbar from './BuyersNavbar'
// import Buyersfooter from './Buyersfooter'
// import searchIcon from '../../assets/icons/Vector.svg'
// import location from '../../assets/icons/location.svg'
// import { useState,useEffect } from 'react'
// import Instance2 from '../../http/Instaance2'
// import Pagination from '@mui/material/Pagination';
// import { Link } from 'react-router-dom'


// const Buyers = () => {
//     const [allProperties, setAllProperties] = useState([])
//     const [page,setPage] = useState(1)
//     const [totalPages,setTotalPages] = useState(null)
//     const [searchQuery, setSearchQuery] = useState('')

//     const handleChange = (event, value) => {
//         setPage(value); // Update page number
//         console.log(value)
//       };

//      const handleSearch =  (e) =>{
//         setSearchQuery(e.target.value)
        
//      }

//     useEffect(()=>{
//         const getProperties = async() =>{
//             if(searchQuery === ''){
//             try {
//                 const res = await Instance2.get(`properties?page=${page}`)
//                 console.log(res.data.properties)
//                 setAllProperties(res.data.properties)
//                 setTotalPages(res.data.totalPages)
//             } catch (error) {
//                 console.log(error)
//             }
//         }else{
//             try {
//                 const res = await Instance2.get(`/properties/search?city=${searchQuery}`) 
//                 setAllProperties(res.data.data)
//                     console.log(res.data.data)
//               } catch (error) {
//                 console.log(error)
//               }
//         }}
//         getProperties()
    
//     },[page,searchQuery])
//   return (
//     <div className='bg-white min-h-screen'>
//         <BuyersNavbar />
//           <header className="h-[300px] bg-no-repeat bg-center bg-cover top-banner">
//             <div className='flex h-full justify-center items-center'>
//             <div className='flex flex-col gap-6'>
//                 <h1 className='text-[#FAFDFE] font-semibold text-[60px] leading-[64px] tracking-[-1px]'>Property Listings</h1>
//                 <div className='relative'>
//                 <img src={searchIcon} alt=""  className='absolute bottom-3 left-1'/>
//                 <input type="text" onChange={handleSearch} className='w-full px-8 py-[10px] rounded-lg border border-[#828E8E] bg-transparent text-white outline-none placeholder:text-[18px] placeholder:leading-6 placeholder:tracking-[-0.5px] placeholder:text-[#CED3D3]' placeholder='Search Property' />
//                 </div>
//             </div>
//             </div>
//           </header>

//           <main className='w-[1200px] mx-auto my-24 flex flex-col gap-6'>
//             <div>
//                 <ul className='flex items-center gap-6'>
//                     <li className='px-[24px] py-[8px] rounded-[100px] w-fit h-[40px] bg-[#3F86FA] cursor-pointer font-medium text-[16px] leading-6 tracking-[-0.5px] text-white'>All</li>
//                     <li className='px-[24px] py-[8px] rounded-[100px] w-fit h-[40px] bg-[#F3F7FF] cursor-pointer font-medium text-[16px] leading-6 tracking-[-0.5px] text-[#242828]'>House</li>
//                     <li className='px-[24px] py-[8px] rounded-[100px] w-fit h-[40px] bg-[#F3F7FF] cursor-pointer font-medium text-[16px] leading-6 tracking-[-0.5px] text-[#242828]'>Land</li>
//                     <li className='px-[24px] py-[8px] rounded-[100px] w-fit h-[40px] bg-[#F3F7FF] cursor-pointer font-medium text-[16px] leading-6 tracking-[-0.5px] text-[#242828]'>Commercial</li>
                    
//                 </ul>
//             </div>

//             <div className='grid grid-cols-3 gap-6'>
//                  {allProperties?.map(property=>(
//                     <Link className='w-[384px] h-[450px] cursor-pointer ' key={property.id} to={`/properties/buyers/${property.id}`} >
//                         <div className='h-[278px] '>
//                             <img src={property?.common_propertyimages[0]?.img} className='w-full h-full object-cover' alt="Image of property" />
//                         </div>
//                         <div className='bg-[#3F86FA] h-[172px] text-[#FCFDFD] py-[24px] px-2 text-center'>
//                             <h3 className='text-[18px] font-semibold  leading-6 tracking-[-0.5px]'>{property.name}</h3>
//                             <div className='flex gap-2 justify-center items-center'><img src={location} alt="" /> <span className='font-medium  text-[16px] leading-6 tracking-[-0.5px]'>{property.address}</span></div>
//                             <div className='leading-5 text-[14px] font-medium text-[#F5F6F6]'><span className='border-r px-1'>{property.number_of_bedrooms || 0} Beds </span>  <span className='border-r px-1'>{property.number_of_bathrooms || 0} Baths</span> <span className=' px-1'>{property.squaremeters} Sq.m</span></div>
//                             <p className='text-[#FCFDFD] text-[22px] font-semibold  leading-[32px] tracking-[-0.75px]'>₦ {property.price}</p>
//                         </div>
//                     </Link>
//                  ))} 
//             </div>
//           </main>

//           <div className='w-fit mx-auto mb-24'>
//           <Pagination  count={totalPages} onChange={handleChange} page={page} variant="outlined" shape="rounded" />
//           </div>

//         <Buyersfooter />
//         </div>
//   )
// }
 
// export default Buyers