export default function Stats({ text, characterLength }) {
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const instaLimit = 210 - characterLength;
  const faceBookLimit = 2200 - wordCount;
  return (
    <section className="stats">
      <Stat stat={characterLength} label="Characters" />
      <Stat stat={wordCount} label="Words" />
      <Stat stat={instaLimit} label="Instagram" />
      <Stat stat={faceBookLimit} label="Facebook" />
    </section>
  );
}

function Stat({ stat, label }) {
  return (
    <div className="stat">
      <span className="stat__number">{stat}</span>
      <h2 className="second-heading">{label}</h2>
    </div>
  );
}
