import Calender from "./Calender"
import {BrowserRouter,Route} from "react-router-dom"
import List from './List'

function App() {
  return (
    <BrowserRouter>
     <div className="App">

  <Route path="/" exact component={Calender}>

  </Route>
  <Route path="/list/:currentDay" exact component={List}>

  </Route>






</div>
    </BrowserRouter>
   
  );
}

export default App;
