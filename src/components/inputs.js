import { useState } from "react";

export const Input =({withDropDown,
  value:defaultValue,
  onChange, 
  placeholder, 
  type='text', 
  data})=>{

    const [value, setValue]= useState(defaultValue);
    const [selectedData, setSelectedData] = useState([]);

    const handleOnChange = (event)=>{
      if(withDropDown){
        setValue(event.target.value)
        const filterCity = data.filter(item => {
        const fixItem = item.name.toLowerCase(); // каждая строчка переводится к нижнему регистру
        return fixItem.startsWith(event.target.value.toLowerCase());
        });
      
        setSelectedData(filterCity);
      }else{
        setValue(event.target.value);
        onChange(event.target.value);
    }
  }

    const handleOnClick=(value)=>{
      onChange(value);
      setValue(value)
      setSelectedData([]);
    }
    
  return(
    <div className="input">
      <label>
        <span className="label_text">{placeholder}</span>
        <input
          onChange={handleOnChange}
          value={value}
          type={type}
          className="input__cities-from" 
          required 
        />
      </label>
      {withDropDown && 
      <ul className="dropdown dropdown__cities-from">
        {value && selectedData.map(city=>{
          return <li className='dropdown__city' key={city.id} onClick={()=>handleOnClick(city.name)}>{city.name}</li>
        })}
      </ul>}
    </div>
  )
}

// export const Calendar = ()=>{
  
//   return(
//     <input
//       type='date'
    
//     /> 
//   )
// }