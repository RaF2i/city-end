import Products from './components/Display';
import Footer from './components/Footer';
import Marquee from './components/Marqueue';
import Navbar from './components/Navbar'
import Stripes from './components/Strips';
import Work from './components/Work'
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className='w-full  bg-zinc-800  text-white'> 
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquee />
        <Footer />
      </div>

    </>
  )
}

export default App
