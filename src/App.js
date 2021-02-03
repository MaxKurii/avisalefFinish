import { useReducer } from 'react';
import { BrowserRouter as Router, 
  Route,
  Redirect
  } from "react-router-dom";
import { Header } from './components/header';
import { Main } from "./components/main";
import { HomePage } from './pages/HomePage';
import { initialState, StoreContext} from './store';

import { reducer } from "./store/reducer";

function App() {

  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <StoreContext.Provider value={{dispatch, state}}>
      <Router>
        <Header />
        <Main />
          <Redirect from="/" to="dashboard" />
        <Route path="/dashboard" component={HomePage} />
      </Router>
    </StoreContext.Provider>
    
  );
}

export default App;
