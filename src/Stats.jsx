export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat stat={stats.characterLength} label="Characters" />
      <Stat stat={stats.wordCount} label="Words" />
      <Stat stat={stats.instaLimit} label="Instagram" />
      <Stat stat={stats.faceBookLimit} label="Facebook" />
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
