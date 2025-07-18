import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export async function action({ params }) {
  try {
    await customFetch.post(`/legend/verifycontent/${params.id}`);
    toast.success('verified successfully');
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect('../all-subs');
}
const Verify1 = () => {
  return <div>verify</div>;
};
export default Verify1;
