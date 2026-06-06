import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Courses from './components/Courses.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonials.jsx'
import Placements from './components/Placements.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-cn-dark">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Courses />
        <Features />
        <Testimonials />
        <Placements />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
