import marioAndAdrianA from "../assets/mario-and-adrian-a.jpg";
import marioAndAdrianB from "../assets/mario-and-adrian-b.jpg";

function Chicago() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon opened its doors in 1995, bringing the taste of the
          Mediterranean coast to the heart of Chicago. We are still owned and
          operated by the same family today.
        </p>
      </div>
      <div className="about-images">
        <img src={marioAndAdrianA} alt="Mario and Adrian, owners of Little Lemon" className="about-image-front" />
        <img src={marioAndAdrianB} alt="Mario and Adrian in the Little Lemon kitchen" className="about-image-back" />
      </div>
    </section>
  );
}

export default Chicago;
