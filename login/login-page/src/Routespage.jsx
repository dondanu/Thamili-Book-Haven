import React from 'react';
import { Route,Routes , BrowserRouter} from 'react-router-dom';
import UseCallbackParent from "./UseCallbackParent";
import UseReducer from "./UseReducer";


const Routespage = () => {
  return (
   
       <Routes>
        <Route path="/count" element={<Count />} />
        <Route path="/usecontext" element={<UseContext />} />

      </Routes>
    
  );
}

export default Routespage;
