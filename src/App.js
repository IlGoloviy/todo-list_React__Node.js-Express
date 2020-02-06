import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Football from './components/Football';
import Tenis from './components/Tenis';
import Basketball from './components/Basketball';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Новини з сайту UA ФУТБОЛ</h3>
      </header>
      <div className="Menu">
        <Link to="/football" className="Menu-item"><h4>Спорт</h4></Link>
        <Link to="/tenis" className="Menu-item"><h4>Теніс</h4></Link>
        <Link to="/basketball" className="Menu-item"><h4>Баскетбол</h4></Link>
        <Link to="/box" className="Menu-item"><h4>Бокс</h4></Link>
      </div>
      <div className="Container">
        <Switch>
          <Route path="/football" component={Football} exact={true} />
          <Route path="/tenis" component={Tenis} exact={true} />
          <Route path="/basketball" component={Basketball} exact={true} />
          <Route path="/box" component={Box} exact={true} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
