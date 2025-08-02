import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonials from "../Testmonials";


export default function Home() {
    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <Testimonials />
            <ContactMe />
        </>
    );
}

