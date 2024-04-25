import About from './components/About';
import Gallery from './components/Gallery';
import GetInTouch from './components/GetInTouch';
import Hero from './components/Hero';
import Menu from './components/Menu';
import RecentWork from './components/RecentWork';
import Testimonials from './components/Testimonials';

const Home = () => {
  return (
    <main>
      <Menu />
      <Hero />
      <About />
      <RecentWork />
      <Gallery />
      <Testimonials />
      <GetInTouch />
    </main>
  );
};

export default Home;
