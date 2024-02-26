
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import store from './store/store';

function App() {

  const number = useSelector(store=>store.number)
    const dispatch=useDispatch()
  return (

    <div className="App">

      <h1>{number}<br></br></h1>
      


      <button  onClick={()=>{dispatch({type:"plus",payLoad:4})}} >+</button>
      <button onClick={()=>{dispatch({type:"mines",payLoad:9})}} >-</button>

    </div>
  );
}

export default App;
