import heroImg from '../../../assets/My project 1.png';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={heroImg} className='hero-img' alt='' />
      <div className='hero-running-text'>
        Webflow Developer - UI/UX Designer
      </div>
    </div>
  );
};

export default Hero;
