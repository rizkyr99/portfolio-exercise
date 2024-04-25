import image1 from '../../../assets/image 33.png';

const Gallery = () => {
  return (
    <section id='gallery'>
      <div className='gallery-container'>
        <div className='gallery-item'>
          <img src={image1} alt='' />
        </div>
        <div className='gallery-item'>
          <img src={image1} alt='' />
        </div>
        <div className='gallery-item'>
          <img src={image1} alt='' />
        </div>
        <div className='gallery-item'>
          <img src={image1} alt='' />
        </div>
      </div>
      <div className='gallery-container'>
        <div className='gallery-item'>
          <img src={image1} alt='' />
        </div>
        <div className='gallery-item'>
          <img src={image1} alt='' />
        </div>
        <div className='gallery-item'>
          <img src={image1} alt='' />
        </div>
        <div className='gallery-item'>
          <img src={image1} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
