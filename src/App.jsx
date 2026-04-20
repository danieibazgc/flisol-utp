import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutFlisol from './components/AboutFlisol'
import Activities from './components/Activities'
import SpeakersCarousel from './components/SpeakersCarousel'
import Schedule from './components/Schedule'
import Sponsors from './components/Sponsors'
import PracticalInfo from './components/PracticalInfo'
import TicketGenerator from './components/TicketGenerator'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-flisol-black text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />

        <section id="que-es-flisol" className="bg-flisol-slate py-20 sm:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <AboutFlisol />
          </div>
        </section>

        <section id="speakers" className="bg-flisol-black py-20 sm:py-24 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SpeakersCarousel />
          </div>
        </section>

        <section id="agenda" className="bg-flisol-slate py-20 sm:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Schedule />
          </div>
        </section>

        <section id="actividades" className="py-20 sm:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Activities />
          </div>
        </section>

        <section id="patrocinadores" className="bg-flisol-slate py-20 sm:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Sponsors />
          </div>
        </section>

        {/* 
        <section id="participa" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <PracticalInfo />
          </div>
        </section>
        */}

        <section id="generar-pase" className="flex min-h-dvh flex-col justify-center py-10 sm:py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <TicketGenerator />
          </div>
        </section>

        <section
          id="registro"
          className="bg-flisol-slate flex min-h-[calc(100dvh-5rem)] box-border flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
        >
          <Register />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
