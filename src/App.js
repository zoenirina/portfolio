import './App.css'
import  Header  from './components/Header/Header'
import  Hero  from './components/Hero/Hero'
import  Footer  from './components/Footer/Footer'
import  Service  from './components/Service/Service'
import  Profile  from './components/Profile/Profile'
import Aos from 'aos';
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    Aos.init()
  
  }, [])
  return (
    <div className="App">
<Header/>
      <main>
        <Hero/>
        <Profile/>
        <Service/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
