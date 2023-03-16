import React from 'react';
import './App.css';

import timer from './modules/timer'

function App() {
  // const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight })
  // const [date, setDate] = useState()
  let width = window.innerWidth
  let height  = window.innerHeight
  // })
  const memory = navigator.appVersion
  
  

  return (
    <>

    <div className="title">
      <h1>Xavier Fenton</h1>
      
    </div>
    <div className='links'>
      <a  href='https://github.com/xavier-fenton'>GitHub</a>
      <a  href='https://www.linkedin.com/in/xavier-fenton-533749252/'>Linkedin</a>
    </div>
    <div><p>{memory}</p></div>
    <div>{width}x{height}</div>
    <div id='countDown'></div>
    {/* <div>{date}</div> */}
    {/* <div>{seconds}</div> */}
    </>
  );
}

export default App;
