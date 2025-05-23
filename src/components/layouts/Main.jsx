import ButtonsList from "../products/ButtonsList";
import LanguageDescription from "../products/LanguageDescription";

export default function Main() {
  return (
    <main>
      <div className="container">
        <section className="title bold p-3 fs-1">Learn Web Development</section>

        <section className="language-buttons m-5">
          <ButtonsList />
        </section>
      </div>
    </main>
  );
}
