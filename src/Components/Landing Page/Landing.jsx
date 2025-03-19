
import Background1 from "../Background/Background1";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const Landing  = ( {onGetStartedClick}) => {
    return (
        <>
            <Background1 />
            <Header />
            <Hero onGetStartedClick={onGetStartedClick} />
        </>
    )
}  
export default Landing;