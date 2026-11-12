export default function MenuItem({ emoji, title, text, price }) {
  return (
    <div className="menu-item">
      <div className="emoji">{emoji}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="price">{price} сом</span>
    </div>
  );
}