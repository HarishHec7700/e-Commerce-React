import './App.css';
import {BrowserRouter as Router ,Routes ,Route,useNavigate} from "react-router-dom"
import Login from './Comp/Login'
import Onebhk from './Comp/Onebhk'
import Twobhk from './Comp/Twobhk'
import Threebhk from './Comp/Threebhk'
import Villa from "./Comp/Villa"
import Home from './Home';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/homepage' element={<Home/>}></Route>
          <Route path='/1bhk' element={<Onebhk/>}></Route>
          <Route path='/2bhk' element={<Twobhk/>}></Route>
          <Route path='/3bhk' element={<Threebhk/>}></Route>
          <Route path='/villa' element={<Villa/>}></Route>
          <Route path='/' element={<Login/>}></Route>
        </Routes>
      </Router>          
      {/* <Login></Login> */}
    </>
  );
}

export default App;
