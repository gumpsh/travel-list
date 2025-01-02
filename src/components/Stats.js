import "../index.css";

export default function Stats({ itemAmount }) {
  return (
    <div className="stats">
      <h3>{`You have ${itemAmount} items on your list, and you already packed ${0} (%)`}</h3>
    </div>
  );
}
