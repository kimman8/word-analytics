export default function Stats() {
  return (
    <section className="stats">
      <Stat stat="0" label="Characters" />
      <Stat stat="0" label="Words" />
      <Stat stat="210" label="Instagram" />
      <Stat stat="2200" label="Facebook" />
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
