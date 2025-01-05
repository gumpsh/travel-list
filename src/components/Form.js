import { useState } from "react";
import "../index.css";

export default function Form({ onAdd, listSize }) {
  const [amount, setAmount] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const item = {
      id: listSize + 1,
      description: description,
      quantity: amount,
      packed: false,
    };

    onAdd(item, amount);
    setAmount(1);
    setDescription("");
  }

  const options = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))}>
        {options.map((o) => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
      <input placeholder="item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <button>ADD</button>
    </form>
  );
}
