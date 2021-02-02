import { createContext } from "react";
const initialState = {
  cityes:[]
};

const StoreContext = createContext();

export{
  initialState,
  StoreContext
}