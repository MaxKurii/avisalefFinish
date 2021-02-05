
const TicketCard = ({gate, from, to, value, depart_date, number_of_changes, destination, origin})=>{

  const getLinkAviasales = () => {
    let link = 'https://www.aviasales.ua/search/';
  
    link += origin; // link = link + data.origin
  
    const date = new Date(depart_date);
  
    const day = date.getDate();
  
    link += day < 10 ? '0' + day : day;
  
    const month = date.getMonth() + 1;
  
    link += month < 10 ? '0' + month : month;
  
    link += destination;
  
    link += '1';
  
    return link;
  };
  return(
  <div>
      <h3 className="agent">{gate}</h3>
        <div className="ticket__wrapper">
          <div className="left-side">
            <a  href={getLinkAviasales()} 
                target="_blank" 
                className="button button__buy"
                rel="noreferrer">
                Купить за {value.toString().split('.')[0]}₽
            </a>
          </div>
        <div className="right-side">
        <div className="block-left">
          <div className="city__from">Вылет из города : 
            <span className="city__name">{from}</span>
          </div>
        <div className="date">{depart_date}</div>
        </div>

        <div className="block-right">
          <div className="changes">{number_of_changes === 0 ? 'Рейс без пересадок': `Количество пересадок: ${number_of_changes}`}</div>
            <div className="city__to">Город назначения:
              <span className="city__name">{to}</span>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export{
  TicketCard
}