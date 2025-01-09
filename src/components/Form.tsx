type FormProps = {
  setShowForm: (showForm: boolean) => void;
};

export const Form = ({ setShowForm }: FormProps) => {
  return (
    <article className="form-section">
      <section className="close">
        <button
          className="closeBtn secondary"
          onClick={() => setShowForm(false)}
        >
          X
        </button>
      </section>
      <section>
        <h2>Ställ en fråga om förskolan</h2>
        <form>
          <input type="text" placeholder="Ditt namn"></input>
          <input type="email" placeholder="Din epost"></input>
          <textarea placeholder="Din fråga"></textarea>
          <button className="secondary">Skicka fråga</button>
        </form>
      </section>
    </article>
  );
};
