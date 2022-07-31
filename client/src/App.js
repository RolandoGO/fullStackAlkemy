import Home from "./components/homeComponents/Home"
import Login from "./components/loginComponents/Login";
import Register from "./components/registerComponents/Register";
import UserOperations from "./components/userOperations/UserOperations";
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

function App() {

  
  return (
    <div className="appContainer">

      <Routes>
        
        <Route path="/" element={<Home></Home>}/>
        <Route path="/register" element={<Register></Register>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/userOperations" element={<UserOperations></UserOperations>}/>
        



       
        <Route path="*" element={<div><h1>Not found</h1></div>}/>

      </Routes>
      

    
    </div>
  );
}

export default App;
