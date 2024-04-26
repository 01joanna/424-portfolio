import Header from "./components/Header/Header"
import About from "./components/About/About"


export default function Home() {
  return (
    <>
      <Header />  
        <div className="text-container">
          <About />
          <div className="scroll-message absolute bottom-6 uppercase font-neuethin text-xs left-4">SCROLL TO EXPLORE ↓</div>
      </div>
      <div className="gradient-bg">
        <svg 
  viewBox="0 0 284 284"
  xmlns='http://www.w3.org/2000/svg'>

  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='9.65' 
      numOctaves='4' 
      stitchTiles='stitch' />
  </filter>

  <rect
    width='100%' 
    height='100%' 
    filter='url(#noiseFilter)' />
</svg>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
      </>
  );
}
