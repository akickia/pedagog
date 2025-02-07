import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../../assets/helpers';
import { Button } from '../Button/Button';
import './Form.css';

type FormProps = {
  form: string;
  placeholder?: string;
  input?: boolean;
  close: (close: boolean) => void;
};

export const Form = ({ form, placeholder, input, close }: FormProps) => {
  const [text, setText] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [confirmationMsg, setConfirmationMsg] = useState<string>('');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showConfirmation) {
      timer = setTimeout(() => {
        setShowConfirmation(false);
        close(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showConfirmation]);

  const handleChange = (event: any, setOption: any) => {
    setOption(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form === 'addQuestion') {
      axios
        .post(`${url}/question/add`, {
          question: text,
        })
        .then((response) => {
          console.log('Form submitted: ', response);
          setText('');
          setConfirmationMsg('Tack för din fråga!');
          setShowConfirmation(true);
        })
        .catch((error) => {
          console.error('Something went wrong: ', error);
        });
    } else if (form === 'logIn') {
      axios
        .post(`${url}/user/login`, {
          email: mail,
          password: password,
        })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          setMail('');
          setPassword('');
          setConfirmationMsg('Du är nu inloggad!');
          setShowConfirmation(true);
        })
        .catch((error) => {
          console.error('Something went wrong: ', error);
        });
    }
  };

  return (
    <form>
      {!input && (
        <textarea
          onChange={(e) => handleChange(e, setText)}
          placeholder={placeholder ? placeholder : ''}
          defaultValue={text ? text : ''}
        ></textarea>
      )}
      {input && (
        <>
          <input
            type="mail"
            onChange={(e) => {
              handleChange(e, setMail);
            }}
            placeholder={placeholder}
          />{' '}
          <input
            type="password"
            onChange={(e) => {
              handleChange(e, setPassword);
            }}
            placeholder="lösenord"
          ></input>
        </>
      )}

      <Button
        type="action"
        disabled={
          (input && (!mail || !password)) ||
          (!input && !text) ||
          showConfirmation
        }
        text={
          form === 'addQuestion'
            ? 'Skicka fråga'
            : form === 'logIn'
            ? 'Logga in'
            : 'Klar'
        }
        action={() => handleSubmit}
      />

      {showConfirmation && <p>{confirmationMsg}</p>}
    </form>
  );
};
