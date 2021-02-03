import "./style.scss";
import { Input } from "../inputs"; 
import { getCityes, getTickets } from "../../api/tickets";
import { useCallback, useState, useEffect } from "react";


function Main(){

  const [data, setData]= useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date , setDate] = useState('');
  const [prices , setPrices] = useState([])
  
  const fetchData = useCallback(async () => {
    const response = await getCityes();
    setData(response);
  }, [setData]);

  useEffect(()=>{
    fetchData();
  }, [fetchData]);

  const handleOnSubmit =async (event)=>{
    event.preventDefault();

    const cityFrom = data.filter((city) => city.name === from)[0];
    const cityTo = data.filter((city) => city.name === to)[0];

    const formData = {
      from: cityFrom.code,
      to: cityTo.code,
      when: date,
    }
    // console.log(formData);
    const response = await getTickets(formData);
    setPrices(response.current_depart_date_prices)
    console.log(response);
  }


  
  
  return(
  <main>
    <section className="wrapper">
      <form className="form-search" 
        onSubmit={handleOnSubmit}
        >
        <div className="wrapper__search">
          <Input 
            withDropDown 
            placeholder={`Откуда`}
            data={data}
            value={from}
            onChange={setFrom}
          />

          <Input 
            withDropDown 
            placeholder={`Куда`} 
            data={data}
            value={to}
            onChange={setTo}
          />

          <Input
            type='date' 
            placeholder={`Отправление`}
            value={date}
            onChange={setDate}
          />
        </div>

        <div className="wrapper__button">
          <button 
          type="submit" 
          className="button button__search">
            <span className="button__search-text">Найти билеты</span>
          </button>
        </div>
      </form>
    </section>


    <section className="wrapper">
      <section 
        className="wrapper__ticket" 
        id="cheapest-ticket" >
        <h2>Самый дешевый билет на выбранную дату</h2>
      </section>

      <section 
        className="block__ticket" 
        id="other-cheap-tickets" >
        <h2>Самые дешевые билеты на другие даты</h2>
      </section>
    </section>
  </main>
  )
}

export{
  Main
}