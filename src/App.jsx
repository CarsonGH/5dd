import './App.css'
import Footer from './landingpage/frames/Footer'
import Homepage from './landingpage/frames/Homepage'
import Info from './landingpage/frames/Info'
import Info2 from './landingpage/frames/Info2'
import Info3 from './landingpage/frames/Info3'
import Cta from './landingpage/frames/Cta'


function App() {
  return (
    <div className='container' id="top">
      <Homepage/>
      <Info/>
      <Info2/>
      <Info3/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default App
