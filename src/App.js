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

export default function App() {
  const [list, setList] = useState(initialItems);
  const [packedItems, setPackedItems] = useState([]);

  function handleAddItem(addedItem, amount) {
    // Only increment quantity for duplicate items
    const descriptions = list.reduce((acc, item) => [...acc, item.description], []);

    if (descriptions.includes(addedItem.description)) {
      const i = list.find((item) => item.description === addedItem.description);
      i.quantity += amount;
      const updatedItems = (current) => [...current];
      setList(updatedItems);
    } else {
      // Otherwise, just add the new item
      const updatedItems = (current) => [...current, addedItem];
      setList(updatedItems);
    }
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
      <Form onAdd={handleAddItem} listSize={list.length} />
      <PackingList list={list} onRemove={handleRemoveItem} onPacked={handlePackedItem} />
      <Stats itemAmount={list.length} packedItems={packedItems.length} />
    </div>
  );
}
