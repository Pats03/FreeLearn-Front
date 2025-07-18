import { useLoaderData } from 'react-router-dom';
import { JobsContainer, SearchContainer} from '../components';

export const loader = async () => {
  try {
    const { data } = await customFetch('/teacher/pending');
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Admin = () => {
  
  return <h1></h1>;
};
export default Admin;
