import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';

import Baseview from './components/FreightOptions/FreightOptions';
import Sample from './views/FreightDashboard/FreightDashboard';
import Footer from './views/footer/footer';
function App() {


  return (
      <BrowserRouter>
        <div className="App">
          <Baseview />
            <Switch>
                <Route path="/" component={Sample}></Route>
            </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
