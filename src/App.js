
import './App.css';
import About from './Componant/About';
import NavBar from './Componant/NavBar';
import TextForm from './Componant/TextForm';
import React,{useState} from 'react';
// import React, { useEffect } from 'react';
// import AutoReload from './AutoReload';
// export switch from './react-router.dom'
// import { Switch } from 'react-router-dom';




  import 
  {
    BrowserRouter as Router,
    Routes,
    Route
    
  } from 'react-router-dom';




function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
if (mode ==='light'){
  setMode('dark')
  document.body.style.backgroundColor="gray";
  
}
else{
  setMode('light');
  document.body.style.backgroundColor="white";
}
  }
  

  return (
    <>
       
        
        
       <Router>
       {/* < AutoReload/> */}
       <NavBar mode={mode} toggleMode={toggleMode}/>
        <div className='container'>
     
      <Routes>
        
          <Route  path="/About" element={<About/>}>
          </Route>
          <Route path="/TextForm" element={<TextForm heading="Enter your Text" mode={mode}/>}>
          </Route>
      </Routes>
        
      {/* <About/> */}
     
        </div>
        
        </Router>
    </>
    
  );
  }
  


export default App;


