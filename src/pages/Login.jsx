import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Formrow, Logo } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg || 'Login failed');
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-4">
        ⚠️ Please enable third-party cookies in your browser settings for this
        site to work properly.
      </div>

      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>

        <FormRow type="text" name="email" placeholder="rasmitha@gmail.com" />

        <FormRow type="password" name="password" placeholder="rasmitha" />

        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        <button type="button" className="btn btn-block">
          Explore the app
        </button>

        <p>
          Not a member yet?{' '}
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
