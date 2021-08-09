import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import Home from './components/Home' 
import Detail from './components/Detail';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
function App() {
  return (
    <Router> 
    <div className="App">
      <Nav />
      <Switch>
         <Route path='/' component={Home} exact ></Route>
        <Route path='/About' component={About}></Route>
      <Route path='/Shop' component={Shop} exact></Route>
      <Route path='/Shop/:id' component={Detail} ></Route>
      </Switch>
       
    </div>
    </Router>
  
  );





}

 
export default App;
