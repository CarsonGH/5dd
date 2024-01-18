import './App.css'
import Footer from './landingpage/frames/Footer'
import Homepage from './landingpage/frames/Homepage'
import Info from './landingpage/frames/Info'
import Info2 from './landingpage/frames/Info2'
import Info3 from './landingpage/frames/Info3'
import Cta from './landingpage/frames/Cta'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Template from './service/Template'
import NewDatabase from './service/newDatabase/NewDatabase'
import Docs from './docs/Docs'
import Databases from './service/databases/Databases'
import Billing from './service/billing/Billing'
import Pricing from './landingpage/frames/Pricing'


function LandingPage(){
  return(
    <div className='landingpage' id="top">
    <Homepage/>
    <Info/>
    <Info2/>
    <Info3/>
    <Pricing/>
    <Cta/>
    <Footer/>
  </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LandingPage/>}/>
        <Route element={<Template/>}>
            <Route path="/app" element={<></>}/>
            <Route path="/app/new-database/" element={<NewDatabase/>}/>
            <Route path="/app/databases/" element={<Databases/>}/>
            <Route path="/app/billing/" element={<Billing/>}/>

        </Route>
        <Route path="/docs" element={<Docs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
