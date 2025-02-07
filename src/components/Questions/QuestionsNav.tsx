//TODO: Fix links and add "more" option to the nav at small screens

export const QuestionsNav = () => {
  return (
    <nav>
      <ul>
        <a>Allmänna frågor</a>
        <a>Introduktion / inskolning</a>
        <a className="active">Digitala verktyg</a>
        <a>Verksamhet</a>
        <a>Övrigt</a>
      </ul>
    </nav>
  );
};
