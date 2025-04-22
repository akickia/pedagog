import { NavLink } from 'react-router-dom';

export const TeacherQuestionsNav = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/admin/questions/all">Alla frågor</NavLink>
        <NavLink to="/admin/questions/unanswered">Obesvarade frågor</NavLink>
        <NavLink to="/admin/questions/reported">Raporterade frågor</NavLink>
      </ul>
    </nav>
  );
};
