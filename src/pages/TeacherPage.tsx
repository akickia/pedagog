import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../assets/helpers';
import { Form } from '../base/Form/Form';
import { useNavigate } from 'react-router-dom';
import { TeacherQuestions } from '../components/Teacher/TeacherQuestions';
import { TeacherQuestionsNav } from '../components/Teacher/TeacherQuestionsNav';
import { FormSection } from '../base/Form/FormSection';

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
          <>
            <h1>Fråga pedagogen</h1>
            <h3>ADMINSIDA</h3>
            {/* <TeacherQuestionsNav /> */}

            <article>
              <h2>Frågor</h2>
              <TeacherQuestions />
            </article>
          </>
        ) : (
          <FormSection
            heading={'Logga in'}
            text="Logga in för att kunna besvara frågor"
            onClose={() => navigate('/')}
          >
            <Form
              form={'logIn'}
              placeholder="email"
              input
              close={setShowLoginForm}
            />
          </FormSection>
        )}
      </article>
    </main>
  );
};
