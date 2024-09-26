<Select
              {...field}
      placeholder="Select Property Type"
      indicator={<KeyboardArrowDown />}
      sx={{
        flexBasis:'50%',
        padding:'16px 24px', 
        borderColor:'#CED3D3',
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option sx={{padding:'8px'}} onClick={handleRadioInput} value="House"><input  className="size-[24px] " type="radio" name="type" id="" /> <span className="font-medium text-[18px] leading-6 tracking-[-0.5px] text-[#242828]">House</span> </Option>
      <Option sx={{padding:'8px'}} onClick={handleRadioInput} value="Land"><input type="radio" className="size-[24px]" name="type" id="" /><span className="font-medium text-[18px] leading-6 tracking-[-0.5px] text-[#242828]">Land</span> </Option>
      <Option sx={{padding:'8px'}} onClick={handleRadioInput} value="Commercial"><input type="radio" className="size-[24px]" name="type" id="" /><span className="font-medium text-[18px] leading-6 tracking-[-0.5px] text-[#242828]">Commercial</span> </Option>
    </Select> 

    <fieldset class="flex flex-col w-full">
    <legend class="mb-4 text-lg font-semibold">Select Property Type</legend>
    
    <label class="flex items-center mb-4">
      <input type="radio" name="propertyType" value="House" class="hidden peer">
      <div class="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
        <span class="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
      </div>
      <span class="ml-2 text-lg font-medium">House</span>
    </label>
    
    <label class="flex items-center mb-4">
      <input type="radio" name="propertyType" value="Land" class="hidden peer">
      <div class="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
        <span class="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
      </div>
      <span class="ml-2 text-lg font-medium">Land</span>
    </label>
    
    <label class="flex items-center mb-4">
      <input type="radio" name="propertyType" value="Commercial" class="hidden peer">
      <div class="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
        <span class="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
      </div>
      <span class="ml-2 text-lg font-medium">Commercial</span>
    </label>
  </fieldset>