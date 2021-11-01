import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/navigation';
import Detail from './routes/details';
import Drama from './routes/drama';
import Comedy from './routes/comedy';
import Action from './routes/action';
import Crime from './routes/crime';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/About' component={About}/>
      <Route path='/movie-detail' component={Detail} />
      <Route path='/drama' component={Drama} />
      <Route path='/comedy' component={Comedy} />
      <Route path='/crime' component={Crime} />
      <Route path='/action' component={Action} />
    </HashRouter>
  )
}
 
export default App;
