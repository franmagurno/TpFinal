import Index from '../components/LandingPage/Hero';
import CTA from '../components/LandingPage/CTA';
import Example from '../components/LandingPage/Team';
import Testimonials from '../components/LandingPage/Testimonials';
import Footer from '../components/LandingPage/Footer';




function LandingPage() {
return (
    <>
    <Index/>
    
    <div id='example'>
    <Example />   
    </div>
    <div id='testimonials'>
    <Testimonials />   
    </div>
    <Footer />
    </>
);
}

export default LandingPage;