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
    <div className='surrounding'>

      <div className="title">
        <h1>Xavier Fenton</h1>
        
      </div>
      <div className='links'>

      <div className="btn-1">
      <a  href='https://github.com/xavier-fenton' target='_blank' rel="noreferrer"><span>GitHub</span></a></div>
      

      
      
      
      <div className='btn-1'><a  href='https://www.linkedin.com/in/xavier-fenton-533749252/' target='_blank' rel="noreferrer"><span>Linkedin</span></a>
      </div>
      </div>


    <div className='fun-data'>
      <div><p>{memory}</p></div>
      <div>{width}x{height}</div>
      {timer}
      <div id='countDown'></div>
    </div>
    </div>
    
    </>
  );
}

export default App;
