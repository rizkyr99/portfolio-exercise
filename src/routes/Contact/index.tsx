import image from '../../assets/Rectangle 25 (2).png';

const Contact = () => {
  return (
    <main id='contact'>
      <div className='contact-info'>
        <img src={image} className='contact-image' alt='' />
        <div className='contact-details'>
          <h2>Contact Details</h2>
          <a href='mailto:ayush.barnwal@brightscout.com'>
            ayush.barnwal@brightscout.com
          </a>
          <a href='tel:+91 8651447521'>+91 8651447521</a>
        </div>
        <div className='contact-socials'>
          <h2>Social</h2>
          <a href=''>LinkedIn</a>
          <a href=''>Instagram</a>
          <a href=''>Twitter</a>
          <a href=''>Webflow</a>
          <a href=''>Figma</a>
        </div>
      </div>
      <div className='contact-form'>
        <h1>Let's build something cool together</h1>
        <form>
          <div className='contact-input-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='James Robert'
              className='contact-input'
            />
          </div>
          <div className='contact-input-group'>
            <label htmlFor='name'>Email</label>
            <input
              type='text'
              placeholder='ayush.barnwal@brightscout.com'
              className='contact-input'
            />
          </div>
          <div className='contact-input-group'>
            <label htmlFor='name'>Subject</label>
            <input
              type='text'
              placeholder='For web design work Enquire'
              className='contact-input'
            />
          </div>
          <div className='contact-input-group'>
            <label htmlFor='name'>Message</label>
            <textarea
              rows={5}
              placeholder='Type your Message'
              className='contact-input'
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
