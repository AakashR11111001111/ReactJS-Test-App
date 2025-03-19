import { useRef } from 'react';
import './App.css'
import Landing from './Components/Landing Page/Landing'
import Services from './Components/Services Page/Services'
import PricingTable from './Components/Pricing Table/PricingTable';

function App() {

    const ServiceRef = useRef(null);
    const onGetStartedClick = () => {
        console.log(ServiceRef.current);
        
        ServiceRef.current?.scrollIntoView({ behavior: "smooth" });
    }

  return (
    <>
          <Landing onGetStartedClick={onGetStartedClick} />
          <Services ServiceRef={ServiceRef} />
          <PricingTable />
    </>
  )
}

export default App
