import arrow from '../../../assets/arrow_forward.svg';

interface Props {
  url: string;
  role: string;
}

const RecentWorkItem = ({ url, role }: Props) => {
  return (
    <div className='recent-work-item'>
      <div className='recent-work-details'>
        <h3 className='recent-work-name'>{url}</h3>
        <p className='recent-work-role'>{role}</p>
      </div>
      <a href='' className='recent-work-link'>
        <img src={arrow} alt='' />
      </a>
    </div>
  );
};

export default RecentWorkItem;
