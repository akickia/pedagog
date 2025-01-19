import { useEffect, useState } from 'react';
import { checkToken } from '../assets/functions';
import { LoginForm } from './LoginForm';

export const Teacher = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // localStorage.setItem(
  //   'token',
  //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoicGVkYWdvZzEyMyIsImlhdCI6MTczNzI5NjA1OCwiZXhwIjoxNzM3MzAwMDU4fQ.1J5PizHcritvEtNmnVh1ZVUeOnoaC-8lxkrLYnmVH6s'
  // );
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <article className="teacher-section">
      {isLoggedIn ? (
        <section className="btn-section">
          <button>Se obesvarade frågor</button>
          <button>Se raporterade frågor</button>
        </section>
      ) : (
        <section>
          <LoginForm />
        </section>
      )}
    </article>
  );
};
