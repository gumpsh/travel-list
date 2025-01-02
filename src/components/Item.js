import "../index.css";

export default function Item({ description, quantity, packed }) {
  return (
    <div>
      <input type="checkbox" checked={packed}></input>
      <span>{quantity}</span>
      <h3>{description}</h3>
      <button>X</button>
    </div>
  );
}
