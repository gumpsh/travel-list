import { useState } from "react";
import "../index.css";

export default function PackingList({ list, onRemove, onPacked, clearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedList;

  if (sortBy === "input") sortedList = list;

  if (sortBy === "description") sortedList = list.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") sortedList = list.slice().sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <li key={item.id}>
            <input type="checkbox" checked={item.packed} onChange={() => onPacked(item.id)} />
            <h3
              style={
                item.packed ? { textDecoration: "line-through" } : {}
              }>{`${item.quantity} ${item.description}`}</h3>
            <button onClick={() => onRemove(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SORT BY INPUT</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={clearList}>CLEAR LIST</button>
      </div>
    </div>
  );
}
