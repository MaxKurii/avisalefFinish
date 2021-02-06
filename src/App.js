import { useReducer } from 'react';
import { BrowserRouter as Router, 
  } from "react-router-dom";
import { Header } from './components/header';
import { Main } from "./components/main";
import { initialState, StoreContext} from './store';

import { reducer } from "./store/reducer";

function App() {

  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <StoreContext.Provider value={{dispatch, state}}>
      <Router>
        <Header />
        <Main />
          
        
      </Router>
    </StoreContext.Provider>
    
  );
}

export default App;
