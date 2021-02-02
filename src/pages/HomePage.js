import {  useContext  } from 'react';
import {  StoreContext  } from "../store";

function HomePage(){
  const {state, dispatch}=useContext(StoreContext)
  return(
    <div>
        Hello world
    </div>
  );
};

export{
  HomePage
}