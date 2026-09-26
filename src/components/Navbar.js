export default function Navbar({ list }) {
  return (
    <nav>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}