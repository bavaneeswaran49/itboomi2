import './App.css'
import Footer from './footer/Footer'
import Pricing from './pricing/Pricing.jsx'
import About from './about/About.jsx'
import GlobalStyle from './Style/GlobalStyle'
import Test from './testimonial/Testimonial.jsx'
import People from './people/People.jsx'
import Faq from './faq/Faq.jsx'
import Guide from './guide/Guide.jsx'
import Hero from './hero/Hero.jsx'
import Navbar from './navbar/Navbar.jsx'
import Work from './work/Work.jsx'
function App() {
  return (
    <>
    <Navbar/>
      <Hero />
      <GlobalStyle />
      <About />
      {/* <Work/> */}
      <People />
      <Test />
      <Guide />
      <Pricing />
      <Faq />
      <Footer />
    </>
  )
}

export default App;
