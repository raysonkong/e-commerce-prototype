import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Route, Switch } from 'react-router-dom';


const HatsPage = () => {
    return(
        <div>
            <h1>Hats Page</h1>
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/hats' component={HatsPage}/>
        </Switch>
    </div>
  );
}

export default App;
