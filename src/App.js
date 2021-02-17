import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
import Footer from './components/Footer'

import Intro from './components/Intro'
import About from './components/About'
import Porfolio from './components/Porfolio'

function App() {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <Porfolio />
      <About />

      <Footer />
    </div>
  )
}

export default App
