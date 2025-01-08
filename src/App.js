import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import "./index.css";

export default function App() {
  const [list, setList] = useState([]);

  function handleAddItem(addedItem, amount) {
    // Only increment quantity for duplicate items
    const descriptions = list.reduce((acc, item) => [...acc, item.description], []);

    if (descriptions.includes(addedItem.description)) {
      const i = list.find((item) => item.description === addedItem.description);
      i.quantity += amount;
      setList((current) => [...current]);
    } else {
      // Otherwise, just add the new item
      setList((current) => [...current, addedItem]);
    }
  }

  function handleRemoveItem(id) {
    const filteredList = list.filter((li) => li.id !== id);
    setList(filteredList);
  }

  function handleTogglePacked(id) {
    setList((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  }

  function handleClearList() {
    const confirmed = window.confirm("Confirm Clear List");

    if (confirmed) setList([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleAddItem} listSize={list.length} />
      <PackingList list={list} onRemove={handleRemoveItem} onPacked={handleTogglePacked} clearList={handleClearList} />
      <Stats items={list} />
    </div>
  );
}
