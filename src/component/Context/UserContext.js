import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import AuthContext from '../Context/AuthProvider';
import axios from '../Api/axios';
const cookies = new Cookies();
const Login_Url = `/user/signin`;

export const UserContext = createContext({});

const Context = ({ children }) => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [user, setUser] = useState();
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const [form, setForm] = useState({
    // email: '',
    // password: '',
  });

  useEffect(() => {
    if (form.email !== '' && form.password !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [form]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function signin(e) {
    e.preventDefault();

    if (formValid === true) {
      try {
        const response = await axios.post(Login_Url, JSON.stringify(form), {
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data?.token;
        navigate('/transaction', { replace: true });
        setAuth(form, accessToken);
        alert('Success');
      } catch (err) {
        if (!err?.response) {
          console.log('No Server Response');
          alert('No Server Response');
        } else if (err.response?.status === 400) {
          console.log('Missing Username or password');
          alert('Missing Username or Password');
        } else if (err.response?.status === 400) {
          console.log('Unauthorize');
          alert('Unauthorize');
        } else {
          console.log('Login Failed');
          alert('Login Failed');
        }
      }
      // let result = await fetch('https://exqure.herokuapp.com/api/user/signin', {
      //   method: 'POST',
      //   body: JSON.stringify(form),
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json',
      //   },
      // });
      // result = await result.json();

      // console.log('result', result);
      // // alert(result.msg);
      // if (result.status === 'Success') {
      //   alert(result.msg);
      //   setisLoggedIn(true);
      //   localStorage.setItem('user-info', JSON.stringify(result));
      //   setUser({ ...result });
      //   cookies.set('TOKEN', result.data.token, {
      //     path: '/',
      //   });
      //   navigate('/transaction', { replace: true });
      // } else {
      //   alert('error');
      //   alert(result.msg);
      // }
    }
    // else {
    //   alert('please fill in reqired fields');
  }

  const logout = () => {
    localStorage.clear();
    setisLoggedIn(false);
    // setUser('');
    navigate('/login', { replace: true });
  };

  const hlogout = () => {
    localStorage.clear();
    setisLoggedIn(false);
    // setUser('');
    navigate('/', { replace: true });
  };
  return (
    <UserContext.Provider
      value={{
        handleChange,
        signin,

        logout,
        hlogout,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default Context;
