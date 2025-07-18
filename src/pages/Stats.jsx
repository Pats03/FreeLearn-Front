import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import { useOutletContext } from 'react-router-dom';
import { StatItem } from '../components';


const Stats = () => {
   const { user, verifiedMediaCount, uploadedCount } = useOutletContext();
  return (
    <Wrapper>
      <StatItem
        title={user.role === 'admin' ? 'Uploaded Content' : 'Current Users'}
        count={uploadedCount}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="Total Verified Content"
        count={verifiedMediaCount}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};
export default Stats;
