import { jwtDecode } from 'jwt-decode';

export function checkToken() {
  //get token from headers.auth
  const token = localStorage.getItem('token');
  //error handling
  if (!token || token === undefined) {
    return false;
  }
  //Bearer replace

  const decodedToken = jwtDecode(token);
  console.log(decodedToken);

  // console.log(decodedTokenJWT);
  // const replacedToken = token.replace('Bearer ', '');

  // //Check
  // try {
  //   const check = jwt.verify(replacedToken, 'pedagog123');
  //   return check;
  // } catch (err) {
  //   return false;
  // }
}

export const url = import.meta.env.VITE_API_URL;
