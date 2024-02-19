import './App.css'
import  Header  from './components/Header/Header'
import  Hero  from './components/Hero/Hero'
import  Footer  from './components/Footer/Footer'
import  Service  from './components/Service/Service'
import  Profile  from './components/Profile/Profile'
import  Portfolio  from './components/Portfolio/Portfolio'
import  Contact  from './components/Contact/Contact'
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
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
