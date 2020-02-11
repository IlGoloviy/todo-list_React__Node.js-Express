import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Tasks from './components/Tasks';
import Tenis from './components/Tenis';
import AddTask from './components/AddTask';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Мій найкращий СПИСОК ЗАДАЧ</h3>
      </header>
      <div className="Menu">
        <Link to="/tasks" className="Menu-item"><h4>Список усіх тасків</h4></Link>
        <Link to="/add-task" className="Menu-item"><h4>Добавити таск</h4></Link>
        <Link to="/basketball" className="Menu-item"><h4>Баскетбол</h4></Link>
        <Link to="/box" className="Menu-item"><h4>Бокс</h4></Link>
      </div>
      <div className="Container">
        <Switch>
          <Route path="/tasks" component={Tasks} exact={true} />
          <Route path="/tenis" component={Tenis} exact={true} />
          <Route path="/add-task" component={AddTask} exact={true} />
          <Route path="/box" component={Box} exact={true} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
