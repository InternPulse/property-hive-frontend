
import { useForm } from "react-hook-form"
import {  useState,useContext } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import DisplayContext from "../../context/DispalyContext";
import { useNavigate } from "react-router-dom";

const AddProperties = () => {
  const [initialForm,setInitialForm] = useState(true);
  const {setData} = useContext(DisplayContext)
  const navigate = useNavigate()
  
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState:{errors,isValid},
    
  } = useForm()

  const handlePageSwitch = () =>{
    setInitialForm(!initialForm)
}

  const onSubmit =  (data) => {
    console.log({...data,});
    setData({...data})
    navigate('/manage-properties/add-property/preview')
  }


  

  return (
    <div className="px-2 md:px-8 pt-[25px]">
      <h5> <span className="text-[#677373] tracking-[-0.5px] leading-[24px] text-[18px] font-medium">Manage Properties</span> / <span className="text-[#255A5D] tracking-[-0.5px] leading-[24px] text-[18px] font-medium">Add Properties</span></h5>
      <h3 className="font-semibold py-5 text-[24px] leading-[32px] tracking-[-1px] text-[#242828]">{`${initialForm ? 'Step 1 of 2' : 'Step 2 of 2'}`}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>{ initialForm ? <Form1 r={register} set={setValue} switchPage={handlePageSwitch}  error={errors} control={control} isValid={isValid} />:<Form2 r={register} set={setValue} control={control} switchPage={handlePageSwitch}  error={errors}  isValid={isValid}/>  } </form>
    </div>
  )
}


export default AddProperties;
