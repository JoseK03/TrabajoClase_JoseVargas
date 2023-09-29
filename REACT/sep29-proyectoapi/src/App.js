import './App.css';
import Read from './components/Read';
import {Router, Route} from 'react-router-dom'

function App() {
  return (
   <>
   <Router>
    <div className='main'>
      <h2 className='main-header'>Trabajo de Clase</h2>
      <div style={{marginTop:20}}>
        <Route exact path='/' component={Read}></Route>
      </div>
    </div>
   </Router>
   </>
  );
}

export default App;
