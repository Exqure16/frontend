import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const UserContext = createContext({});

const Context = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => ({ loggedIn: false }));
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
      let result = await fetch('https://exqure.herokuapp.com/api/user/signin', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      result = await result.json();
      console.log('result', result);
      // alert(result.msg);
      if (result.status === 'Success') {
        alert(result.msg);
        localStorage.setItem('user-info', JSON.stringify(result));
        setUser({ ...result });
        navigate('/transaction', { replace: true });
        // window.location = '#/transaction';
      } else {
        alert('error');
        alert(result.msg);
      }
    } else {
      alert('please fill in reqired fields');
    }
  }
  return (
    <UserContext.Provider value={{ user, handleChange, signin, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default Context;
