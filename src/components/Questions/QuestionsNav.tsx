import { NavLink } from 'react-router-dom';

export const QuestionsNav = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/questions/all">Alla frågor</NavLink>
        <NavLink to="/questions/introduktion">Introduktion</NavLink>
        <NavLink to="/questions/digital">Digitala verktyg</NavLink>
        <NavLink to="/questions/verksamhet">Verksamhet</NavLink>
        <NavLink to="/questions/ovrigt">Övrigt</NavLink>
      </ul>
    </nav>
  );
};
