// App.js

import React from 'react';
import DashBoard from './Component/BODY/DashBoard';
import { BrowserRouter as Router ,Routes , Route} from "react-router-dom"
import Body from './Component/BODY/Body';
import Support from './Component/BODY/Support';
import Plugins from './Component/BODY/Plugins';
import Help from './Component/BODY/Help';
import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"



const App = () => {
  return (
    <div className='main'>
     <Router>
     <DashBoard/>
    
     <Routes>
     <Route path='/' element={<Body/>}   />
     <Route path='/support' element={<Support/>}   />
     <Route path='/plugin' element={<Plugins/>}   />
     <Route path='/help' element={<Help/>}   />


     </Routes>

     
    </Router>

    </div>
  );
};

export default App;
