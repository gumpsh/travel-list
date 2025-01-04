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
  const [list, setList] = useState(initialItems);
  const [packedItems, setPackedItems] = useState([]);

  function handleAddItem(amount, description) {
    const item = {
      id: list.length + 1,
      description: description,
      quantity: amount,
      packed: false,
    };

    const updatedItems = (current) => [...current, item];

    setList(updatedItems);
  }

  function handleRemoveItem(item) {
    const filteredList = list.filter((li) => li.id !== item.id);
    setList(filteredList);
  }

  function handlePackedItem(item) {
    const itemsPacked = (current) => [...current, item];
    setPackedItems(itemsPacked);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleAddItem} />
      <PackingList list={list} onRemove={handleRemoveItem} onPacked={handlePackedItem} />
      <Stats itemAmount={list.length} packedItems={packedItems.length} />
    </div>
  );
}

export default App;
