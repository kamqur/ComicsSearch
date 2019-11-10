import React from 'react';
import './App.css';
import Favourite from '../src/components/favourite'
import MainComponent from './components/main-components'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="container-fluid">
      <Router>
      <Switch>
        <Route path='/favourite' component={Favourite} />
        <Route path="/" component={MainComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

 
export default App;
