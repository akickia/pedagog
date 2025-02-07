import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../assets/helpers';
import { TeacherHero } from '../components/Teacher/TeacherHero';
import { Form } from '../base/Form/Form';
import { useNavigate } from 'react-router-dom';

export const TeacherPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(true);

  const navigate = useNavigate();
  //UseEffect to check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`${url}/check`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setIsLoggedIn(true);
          setShowLoginForm(false);
        } else {
          setIsLoggedIn(false);
          setShowLoginForm(true);
        }
      })
      .catch((error) => {
        console.error('No token: ', error);
        setIsLoggedIn(false);
        setShowLoginForm(true);
      });

    // In production:
    // .get(`${url}/check`, { withCredentials: true })
    // .then((response) => {
    //   if (response.status === 200) {
    //   console.log('You are logged in');
    //   }
    // })
    // .catch((error) => {
    //   console.error('No token: ', error);
    // });
  }, [showLoginForm]);

  return (
    <main>
      <article className="teacher-section">
        {isLoggedIn ? (
          <TeacherHero />
        ) : (
          <article className="form-section">
            <button className="close secondary" onClick={() => navigate('/')}>
              X
            </button>
            <h2>Logga in</h2>
            <Form
              form="logIn"
              placeholder="email"
              input={true}
              close={setShowLoginForm}
            />
          </article>
        )}
      </article>
    </main>
  );
};
