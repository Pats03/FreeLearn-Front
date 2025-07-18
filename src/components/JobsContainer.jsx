import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';


import { useAllJobsContext } from '../pages/Allsubs';

const JobsContainer = (props) => {
  //const { data } = useAllJobsContext();
  const user = props.user;
  const media=props.content.media;
  console.log(media);
  
 // const { media } = data;
  if (media.length === 0) {
    return (
      <Wrapper>
        <h2>No media or videos to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="jobs">
        {media.map((med) => {
          return <Job key={med._id} {...med} user={user}/>;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
