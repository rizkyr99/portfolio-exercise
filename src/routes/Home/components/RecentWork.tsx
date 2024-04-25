import RecentWorkItem from './RecentWorkItem';

const works = [
  {
    url: 'Decodable.co',
    role: 'Brand Design - Webflow Development - Web Design',
  },
  {
    url: 'Gofirefly.io',
    role: 'Brand Design - Webflow Development - Web Design',
  },
  {
    url: 'Blinkops.com',
    role: 'Brand Design - Webflow Development - Web Design',
  },
  {
    url: 'Withkanvas.com',
    role: 'Brand Design - Webflow Development - Web Design',
  },
];

const RecentWork = () => {
  return (
    <section className='two-column' id='recent-work'>
      <h2 className='section-title'>Recent Work</h2>
      <div className='recent-work-list'>
        {works.map((work) => (
          <RecentWorkItem url={work.url} role={work.role} />
        ))}
      </div>
    </section>
  );
};

export default RecentWork;
