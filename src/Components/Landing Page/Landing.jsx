import Background from "../background/Background";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const Landing  = ( {onGetStartedClick}) => {
    return (
        <>
            <Background />
            <Header />
            <Hero onGetStartedClick={onGetStartedClick} />
        </>
    )
}  
export default Landing;