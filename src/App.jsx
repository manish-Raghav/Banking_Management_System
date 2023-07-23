import Header from "./Component/Header"
// import Router from "./Pages/Router"
import Landing from "./views/Landing" 
import {Route ,Routes  } from "react-router-dom"

import Home from "./Pages/Home"
import NewAccount from "./Pages/NewAccount"
import Tranjection from "./Pages/Tranjection"

import Custumer from "./Pages/Custumer"
import Transfer from "./views/Transfer"








const App = () => {

  return (
    <div>
    <Header /> 
    

<Routes>
<Route path="/" element={<Home/>} />
<Route path="/Custumer" element={ <Custumer/> } />
<Route path="/NewAccount" element={ <NewAccount/> } />
<Route path="/Tranjection" element={ <Tranjection/> } />
</Routes>


    
    </div>
  )
}

export default App
