import {useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import Instance2 from '../../http/Instaance2'
import BuyersNavbar from './BuyersNavbar'
import Buyersfooter from './Buyersfooter'
import cart from '../../assets/icons/shopping-cart.svg'
import share from '../../assets/icons/share.svg'
import bed from '../../assets/icons/Bed.svg'
import bath from '../../assets/icons/Bath tub.svg'
import area from '../../assets/icons/Area.svg'
import { useNavigate } from 'react-router-dom' 

const PropertyDescription = () => {
    const {id} = useParams()
    const [property, setProperty] = useState({})
    const [similarity,setSimilarity] = useState([])
    const [amount,setAmount] = useState(0)
    const [productId,setProductId] = useState(0) 
    const navigate = useNavigate()

    const handlePurchase = async () =>{
        try {
             await Instance2.post('/purchase',{
                propertyId:1,
                userId:1,
                paymentMethod:'Transfer',
                totalAmount:5000
              })
              navigate('/properties/buyers/successful')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        const getProperty = async() =>{
            try {
                const res = await Instance2.get(`/properties/${id}`)
                const similar = await Instance2.get(`/properties/search?city=${res.data.data.city}`)
                setProperty(res.data.data)
                console.log(res.data.data)
                setSimilarity(similar.data.data)
                setAmount(res.data.data.price)
                setProductId(res.data.data.id)

            } catch (error) {
                console.log(error)
            }
        }
        getProperty()
    },[id,amount])

  return (
    <div className=''>
        <BuyersNavbar />
        <div className=' min-h-screen px-[100px]'>
        <h5 className='font-medium text-[18px] leading-6 tracking-[0.5px]'><span className='text-[#4B5353]'>Properties</span> <span className='text-[#3F86FA]'>/Property details</span></h5>
        <div className='border-b border-[#242828]'>
        <h1 className='text-[#242828] font-semibold tracking-[-1px] text-[36px] leading-[44px]'>{property.name}</h1>
        <p className='text-[#242828] font-medium tracking-[-0.5px] text-[18px] leading-[24px]'>{property.address}</p>
        </div>

        <div className='flex justify-between py-6'>
            <ul className='flex gap-9'>
                <li className='font-medium tracking-[-0.75px] text-[22px] leading-8 text-[#3F86FA]'>Overview</li>
                <li className='font-medium tracking-[-0.75px] text-[22px] leading-8 text-[#3F86FA]'>Pricing</li>
            </ul>

            <ul className='flex gap-9'>
                <li className='font-medium tracking-[-0.75px] text-[22px] leading-8 text-[#3F86FA] flex items-center gap-1'><img src={cart} alt="" /> Add to Cart</li>
                <li className='font-medium tracking-[-0.75px] text-[22px] leading-8 text-[#3F86FA] flex items-center gap-1'><img src={share} alt="" /> Share</li>
            </ul>
        </div>
        
        <div>
            <div className='grid grid-cols-2 w-[1202px] mx-auto'>
                <div className='border w-[586px] h-[500px]'>
                    {property?.common_propertyimages?.map((item,index)=>(
                        <div key={item.id} className='w-full h-full'>
                            <img className={`${index === 0 ?'block':'hidden'} w-full h-full object-cover`} src={index === 0 ? item.img : ''} alt=""  />
                            
                        </div>
                    ))}
                </div>
              <div className=' grid grid-cols-2 gap-4 w-[610px]'>
                {property?.common_propertyimages?.map((item,index)=>(
                    <div key={item.id} className='w-[305px] h-[246px]'>
                            <img className={`w-full h-full object-cover`} src={item.img } alt=""  />
                    </div>
                ))  }
                </div>
            </div>
        </div>

        <div>
            <div className='flex justify-center py-5'>
            <div className='w-[762px]'>
                <h3 className='text-[#242828] font-semibold text-[36px] leading-[44px] tracking-[-1px]'>Property Description</h3>
                <ul className='flex gap-16 py-4'>
                    <li>
                        <img src={bed} alt="" />
                        <p className='text-[18px] leading-6 tracking-[-0.5px] text-[#242828]'>{property.number_of_bedrooms}Beds</p>
                    </li>
                    <li>
                        <img src={bath} alt="" />
                        <p className='text-[18px] leading-6 tracking-[-0.5px] text-[#242828]'>{property.number_of_bathrooms}Baths</p>
                    </li>
                    <li>
                        <img src={area} alt="" />
                        <p className='text-[18px] leading-6 tracking-[-0.5px] text-[#242828]'>{property.squaremeters}sqm</p>
                    </li>
                </ul>
                <p>{property.description}</p>
            </div>

            <div className=' flex flex-col gap-3 text-center w-[410px] text-[#242828] border border-[#FCFDFD] px-4 py-6 rounded-2xl shadow-sm'>
                <div>
                    <h3 className='font-semibold text-[36px] leading-[44px] tracking-[-1px]'>₦{property.price?.toLocaleString()}</h3>
                    <p className='font-medium text-[18px] leading-6 tracking-[-0.5px]'>(Full Payment)</p>
                </div>

                <div>
                    <h3 className='font-semibold text-[28px] leading-[36px] tracking-[-1px]'>₦{property.installment_payment_price?.toLocaleString()}</h3>
                    <p className='font-medium text-[18px] leading-6 tracking-[-0.5px]'>{`(${property.installment_duration} installment)`}</p>
                </div>

                <div>
                    <h3 className='font-semibold text-[28px] leading-[36px] tracking-[-1px]'>₦{property.down_payment?.toLocaleString()}</h3>
                    <p className='font-medium text-[18px] leading-6 tracking-[-0.5px]'>{`(${property.payment_frequency} installment)`}</p>
                </div>

                <button className='rounded-lg bg-[#3F86FA] h-[56px] w-[378px] text-white px-[24px] py-[16px]' onClick={handlePurchase}>Buy Now</button>
                <button className='rounded-lg border border-[#3F86FA] h-[56px] w-[378px] text-[#3F86FA] px-[24px] py-[16px]'>Make Enquiry</button>
            </div>
            </div>
        </div>

        <div className='flex flex-col gap-6 py-4'>
            <h3 className='font-semibold text-[32px] leading-[40px] tracking-[-1px]'>Installment Options</h3>
            <div className='flex flex-col gap-6'>
                <div>
                <span>{property.installment_duration} installment </span> <span>{`₦${property.installment_payment_price?.toLocaleString()}`}</span>
                </div>

                <div className='flex gap-4'>
                    <div>
                        <p className='font-medium text-[20px] leading-[28px] tracking-[-0.75px]'>DownPayment</p>
                        <h4 className='font-semibold tracking-[-1px] leading-[32px] text-[24px]'>₦{property.down_payment?.toLocaleString()}</h4>
                    </div>

                    <div>
                    <p className='font-medium text-[20px] leading-[28px] tracking-[-0.75px]'>Payment Frequency</p>
                    <h4 className='font-semibold tracking-[-1px] leading-[32px] text-[24px]'>{property.payment_frequency}</h4>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='py-8'>
            <h3 className='font-medium leading-[44px] tracking-[-1px] text-[36px]'>Location</h3>
            <span className='text-[20px] leading-[28px] tracking-[-0.75px]'>Your Guide to Ideal Living Spaces</span>
            <div className='py-6'>
            <iframe 
      src={`https://maps.google.com/maps?q=${encodeURIComponent(property.address)}&output=embed`}
      width="100%" 
      height="400" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy"
    >
    </iframe>
            </div>
        </div>

        <div>
        <h3 className='font-medium leading-[44px] tracking-[-1px] text-[36px]'>Similar Listings</h3>
        <span className='text-[20px] leading-[28px] tracking-[-0.75px]'>see more listings that match your criteria and lifestyle </span>

        <div className='grid grid-cols-3 gap-6 py-6 '>
                 {similarity?.slice(0,3).map(property=>(
                    <Link className='w-[384px] h-[450px] cursor-pointer ' key={property.id} to={`/properties/buyers/${property.id}`} >
                        <div className='h-[278px] '>
                            <img src={property?.common_propertyimages[0]?.img} className='w-full h-full object-cover' alt="Image of property" />
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
        </div>
        </div>
        <Buyersfooter />
        </div>
  )
}

export default PropertyDescription