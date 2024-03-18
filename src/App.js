import {useState} from 'react';
import './App.css';

function App() {
  const [result,setResult] = useState("");
const clickHandler=(event)=>{
  setResult(result.concat(event.target.value))
}
const clear=()=>{
  setResult("");
}
const calculate=()=>{
  setResult(eval(result).toString());
}
  return (
    <div className="App">
    <div className='calc'>
      <input type="text" placeholder ="0" id="answer" value={result}/>
      <div className='button'> 
      <input type="button" value="9" onClick={clickHandler}/>
      <input type="button" value="8" onClick={clickHandler}/>
      <input type="button" value="7" onClick={clickHandler}/>
      <input type="button" value="6" onClick={clickHandler}/>
      <input type="button" value="5" onClick={clickHandler}/>
      <input type="button" value="4" onClick={clickHandler}/>
      <input type="button" value="3" onClick={clickHandler}/>
      <input type="button" value="2" onClick={clickHandler}/>
      <input type="button" value="1" onClick={clickHandler}/>
      <input type="button" value="0" onClick={clickHandler}/>
      <input type="button" value="*" onClick={clickHandler}/>
      <input type="button" value="-" onClick={clickHandler}/>
      <input type="button" value="+" onClick={clickHandler}/>
      <input type="button" value="%" onClick={clickHandler}/>
      <input type="button" value="=" onClick={calculate}/>
      <input type="button" value="Clear" style={{width: "96px"}}onClick={clear}/>
      </div>
      </div>
    </div>
  );
}

export default App;
