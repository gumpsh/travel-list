import { useState } from "react";
import "../index.css";

export default function Form({ onAdd }) {
  const [amount, setAmount] = useState(1);
  const [description, setDescription] = useState("");

  function add() {
    onAdd(amount, description);
  }

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <select name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}>
        {options.map((o) => (
          <option value={o}>{options[o - 1]}</option>
        ))}
      </select>
      <input value={description} onChange={(d) => setDescription(d.target.value)}></input>
      <button onClick={add}>ADD</button>
    </div>
  );
}
