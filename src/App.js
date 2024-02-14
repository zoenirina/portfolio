import './App.css'
import  Header  from './components/Header/Header'
import  Hero  from './components/Hero/Hero'
import  Footer  from './components/Footer/Footer'
import  Service  from './components/Service/Service'
import Aos from 'aos';
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    Aos.init()
  
  }, [])
  return (
    <div className="App">
      <Header/>
      <main><Hero/>
      {/* <h5
          data-aos="ease-in"
          data-aos-duration="1800"
          data-aos-delay="500"
          className="text-headingColor font-[600] text-[16px] bg-smallTextColor">
          Bienvenue!
        </h5> */}
        <Service/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
