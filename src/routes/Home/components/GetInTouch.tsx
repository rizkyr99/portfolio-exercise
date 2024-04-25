import image from '../../../assets/Rectangle 25.png';

const GetInTouch = () => {
  return (
    <section id='get-in-touch'>
      <p className='get-in-touch-title'>
        Have something in mind?
        <span>
          <img src={image} alt='' />
          let's build it together.
        </span>
      </p>
      <a href='' className='get-in-touch-btn'>
        Get In Touch
      </a>
    </section>
  );
};

export default GetInTouch;
