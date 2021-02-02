import "./style.scss";
import { Input } from "../inputs"; 
import { getCityes } from "../../api/tickets";
import { useCallback, useState, useEffect } from "react";



function Main(){

  const [data, setData]= useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date , setDate] = useState('')
  
  const fetchData = useCallback(async () => {
    const response = await getCityes();
    setData(response);
  }, [setData]);

  useEffect(()=>{

    fetchData();
  }, [fetchData]);

  const handleOnSubmit =(event)=>{
    event.preventDefault();
  }
  
  return(

  <main>
    <section className="wrapper">
      <form className="form-search" onSubmit={handleOnSubmit}>
        <div className="wrapper__search">
          <Input 
            key={data.id}
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
          <button type="submit" className="button button__search">
            <span className="button__search-text">Найти билеты</span>
          </button>
        </div>
      </form>
    </section>
    <section className="wrapper">
      <section className="wrapper__ticket" id="cheapest-ticket" >
        <h2>Самый дешевый билет на выбранную дату</h2>
      </section>

      <section className="block__ticket" id="other-cheap-tickets" >
        <h2>Самые дешевые билеты на другие даты</h2>
      </section>
    </section>
  </main>
  )
}

export{
  Main
}