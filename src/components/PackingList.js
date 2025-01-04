import { useState } from "react";
import "../index.css";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function PackingList({ list, onRemove, onPacked }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isPacked, setIsPacked] = useState(false);

  function remove(item) {
    onRemove(item);
  }

  function pack(item) {
    item.packed = true;
    setIsChecked(!isChecked);
    setIsPacked(true);
    onPacked(item);
  }

  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <input type="checkbox" checked={item.packed} onChange={() => pack(item)} />
            <h3>{`${item.quantity} ${item.description}`}</h3>
            <button onClick={() => remove(item)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// {
//     /* <li>{<Item key={item.id} description={item.description} quantity={item.quantity} packed={item.packed} />}</li> */
//   }
