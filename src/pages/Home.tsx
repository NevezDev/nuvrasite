import Header from '../components/Header';
import Hero from '../components/Hero';
import Chatbot from '../components/Chatbot';
import About from '../components/About';
import WhyNuvra from '../components/WhyNuvra';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <WhyNuvra />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home;
