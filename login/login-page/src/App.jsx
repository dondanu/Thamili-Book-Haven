import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login'; 
import Guest from './Guest';  
import Dashboard from './Dashbord';
import Form from './Form';
import Form2 from './Form2';
import EmployeeUseRef from './EmployeeUseRef';
import Employee from './Employee';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/guest" element={<Guest />}/>
        <Route path="/dashbord" element={<Dashboard />}/>
        <Route path="/form" element={<Form />} /> 
        <Route path="/employee" element={<Employee/>} /> 
        <Route path="/form2" element={<Form2 />} />  
        <Route path="/employeeUseRef" element={<EmployeeUseRef />} />       
      </Routes>
    </Router>
  );
}

export default App;
