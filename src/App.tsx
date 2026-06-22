import Hero from './components/Hero'
import Features from './components/Features'
import TechSpecs from './components/TechSpecs'
import UseCases from './components/UseCases'
import GettingStarted from './components/GettingStarted'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BetaBanner from './components/BetaBanner'
import './App.css'

function App() {
  return (
    <div className="App">
      <BetaBanner />
      <Navbar />
      <Hero />
      <Features />
      <TechSpecs />
      <UseCases />
      <GettingStarted />
      <Footer />
    </div>
  )
}

export default App

