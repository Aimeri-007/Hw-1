import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <h2>Наше меню</h2>
      <div className="menu-list">
        <MenuItem emoji="☕" title="Эспрессо" text="Крепкий и насыщенный" price={120} />
        <MenuItem emoji="🥛" title="Капучино" text="Нежная молочная пенка" price={180} />
        <MenuItem emoji="🧊" title="Айс латте" text="Освежающий холодный кофе" price={200} />
        <MenuItem emoji="🥐" title="Круассан" text="Свежая выпечка" price={110} />
      </div>
    </section>
  );
}