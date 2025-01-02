import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  // logo - images and title

  // form to add items - amount, item name, add button (adds to a list)

  // packingList - display a list of items, also has a sort button and a clear list button

  // item - checkbox (true = packed), amount, name, X (remove item)

  // stats - "You have ${items.size} items on your list, and you already packed ${packedItems} (%)"
  const [list, setList] = useState(initialItems);

  function handleAddItem(item) {
    setList((currentItems) => [...currentItems, item]);
  }

  function handleRemoveItem(item) {
    const filteredList = list.filter((li) => li.id !== item.id);
    setList(filteredList);
  }

  function handlePackedItem(item, isChecked) {}

  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleAddItem} />
      <PackingList list={list} onRemove={handleRemoveItem} />
      <Stats itemAmount={list.length} />
    </div>
  );
}

export default App;
