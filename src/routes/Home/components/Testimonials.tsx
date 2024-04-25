import author1 from '../../../assets/Rectangle 25.png';

const Testimonials = () => {
  return (
    <section className='two-column' id='testimonials'>
      <h2 className='section-title'>Testimonials</h2>
      <div className='testimonials-list'>
        <div className='testimonials-item'>
          <p className='testimonials-content'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.”
          </p>
          <div className='testimonials-author'>
            <img src={author1} alt='' />
            <div>
              <p className='testimonials-name'>Ayush Raj</p>
              <p className='testimonials-role'>VP Marketing @ Webflow</p>
            </div>
          </div>
        </div>
        <div className='testimonials-item'>
          <p className='testimonials-content'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.”
          </p>
          <div className='testimonials-author'>
            <img src={author1} alt='' />
            <div>
              <p className='testimonials-name'>Ayush Raj</p>
              <p className='testimonials-role'>VP Marketing @ Webflow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
