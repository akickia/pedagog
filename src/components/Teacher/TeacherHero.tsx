export const TeacherHero = ({setQuestionType} : any) => {
  return (
    <section className="btn-section">
      <button className="primary" onClick={setQuestionType('all')}>Se alla frågor</button>
      <button className="secondary" onClick={setQuestionType('unanswered')}>Se obesvarade frågor</button>
      <button className="action" onClick={setQuestionType('reported')}>Se raporterade frågor</button>
    </section>
  );
};
