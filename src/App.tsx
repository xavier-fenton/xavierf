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
  let memory2 = navigator.language
  let memory3 = navigator.connection.downlink
  let memory4 = navigator.userAgentData.brands.map((data: {brand: string, version: string}) => {
    console.log(data);
    return data.brand
    
  })
  let memory5 = window.localStorage.url
  // let memory6 = window.currentEntry.NavigationHistoryEntry.id

  console.log(window);
  
  

  return (
    <>
    
      <div className="title">
        <h1>Xavier Fenton</h1>
        
      </div>
      <div className='links'>

      <div className="btn-1">
      <a  href='https://github.com/xavier-fenton' target='_blank' rel="noreferrer"><span>GitHub</span></a></div>
      

      
      
      
      <div className='btn-1'><a  href='https://www.linkedin.com/in/xavier-fenton-533749252/' target='_blank' rel="noreferrer"><span>Linkedin</span></a>
      </div>
      </div>

  <div className='fun-wrapper'>
    <div className='fun-data '>
        <div><p>{memory}</p></div>
        <div>{width}x{height}</div>
        <div>{memory2}</div>
        <div>{memory3}</div>
        <div>{memory4}</div>
        <div>**{memory5}**</div>
        {/* <div>{memory6}</div> */}


        
        {!timer}
        <div id='countDown'></div>
      </div>
    </div>
    
    
    </>
  );
}

export default App;
