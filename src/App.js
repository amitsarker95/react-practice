import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice (){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    console.log(data);

  }

  useEffect(function(){
    getAdvice()
  }, [])

  return (
  <div>
    <h1>{advice}</h1>
    <button onClick={getAdvice}>Get Advice</button>
    <Message count = {count}/>
  </div>
  );
  function Message(props){
    return ( 
      <h3>You have click <b>{props.count}</b> times on the button.</h3>
    );
  }


}

export default App;
