import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
const url = import.meta.env.VITE_API_URL;
export const LoginForm = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //
    const user = {
      email: userEmail,
      password: userPassword,
    };
    // Next time: Check why not working
    axios
      .post(`${url}/user/login`, {
        body: {
          email: userEmail,
          password: userPassword,
        },
      })
      .then((response) => {
        console.log('Response: ' + response);
      })
      .catch((error) => {
        console.error('Something went wrong: ', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="E-post"
        onChange={(e) => handleEmailChange(e)}
        required
      />
      <input
        type="password"
        placeholder="Lösenord"
        onChange={(e) => handlePasswordChange(e)}
        required
      />
      <button type="submit">Logga in</button>
    </form>
  );
};
