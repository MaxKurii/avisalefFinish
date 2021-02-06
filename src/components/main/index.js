import "./style.scss";
import { Input } from "../inputs"; 
import { getCityes, getTickets } from "../../api/tickets";
import { useCallback, useState, useEffect } from "react";
import { TicketCard } from "../ticketsCard";


function Main(){
  
  const [data, setData]= useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date , setDate] = useState('');
  const [prices , setPrices] = useState([]);
  const [visible, setVisible]= useState(false);


  
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
      from: cityFrom,
      to: cityTo,
      when: date,
    }

    const response = await getTickets(formData);
    console.log(response);
    if(!response.best_prices){
      return 
    }
    setPrices(response.best_prices.sort((a, b) => a.value - b.value))
    
    setVisible(true)
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
        className={!visible ? "wrapper__ticket" : "wrapper"}
        id="cheapest-ticket" >
        <h2>Самые дешевые билеты на выбранную дату</h2>
        {prices.filter((ticket)=> ticket.depart_date === date).map(price =>
          {
          return (
          <TicketCard  
            key={price.value}
            {...price}
            from={from} 
            to={to}
            />
            )
          })
        }    
      </section>

      <section 
        className={!visible ? "block__ticket" : "wrapper"}
        id="other-cheap-tickets" >
        <h2>Самые дешевые билеты на другие даты</h2>
        {prices.filter((ticket)=> ticket.depart_date !== date).filter((ticket, index)=> index < 10).map(price =>
          {
          return (
          <TicketCard 
            key={price.value}
            {...price}
            from={from} 
            to={to}
            />
            )
          })
        }
      </section>
    </section>


  </ main> )
}

export{
  Main
}