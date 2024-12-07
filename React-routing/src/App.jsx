import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { Suspense } from 'react';
// import { Dashboard } from './components/Dashboard'
// import Landing from './components/Landing' 
import { useNavigate } from 'react-router-dom'
const Dashboard = React.lazy(()=> import('./components/Dashboard'));
const Landing = React.lazy(()=>import('./components/Landing' )
)

// lazy loading: When the website loads on client side routing, it brings the entire js files of code i.e dashboard page, landing page and other pages with it
//but if user only want s to access the landing page the  importing extra pages is unnecesary, so using React.lazy will lazyly bring the code i.e only when prompted
function App() {
  

  
  

  return (
    <>
        {/* <div>
          <button onClick={()=>{
            window.location.href = "/dashboard"
          }}>Go to Dashboard</button>
          <button onClick={()=>{
            window.location.href = "/"                                                                             
          }}>Go to Landing page</button>
          </div>                                                         */}
          


          
                                                                                    {/* The problem with using onClick here is it is reloading the Page 
                                                                                    on every click i.e bringing every component from the backend again which is 
                                                                                    not done in client side routing  */}
                                                                                    {/* to get rid of the constant reloads we use useNavigate hook */}

    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path = "/dashboard" element =  {<Suspense fallback = {"Loading"}>< Dashboard/></Suspense>} ></Route>
      <Route path = "/" element =  {<Suspense fallback={"Loading..."}>< Landing/></Suspense>}></Route>
    </Routes>
    
      
    </BrowserRouter>
    </>
  )
}

          // Use navigate can only be used inside <BroserRouter> so we create a component and put all our logic inside it of the buttons


function Appbar(){
  const navigate = useNavigate();
    return  <div>
    <button onClick={()=>{
      navigate("/dashboard");
    }}>Go to Dashboard</button>
    <button onClick={()=>{
      navigate("/");                                                                      
    }}>Go to Landing page</button>
    </div>  

}

export default App
