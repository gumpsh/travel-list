import "../index.css";

export default function Form({ onAdd }) {
  function add(item) {
    onAdd(item);
  }

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <select name="amount">
        {options.map((o) => (
          <option value={options[o - 1]}>{options[o - 1]}</option>
        ))}
      </select>
      <input></input>
      <button onClick={add}>ADD</button>
    </div>
  );
}
