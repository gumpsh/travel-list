import { useEffect, useState } from "react";
import "../index.css";

export default function Stats({ itemAmount, packedItems }) {
  const [percentagePacked, setPercentagePacked] = useState();

  useEffect(() => {
    setPercentagePacked((packedItems / itemAmount) * 100);
  }, [itemAmount, packedItems]);

  return (
    <div className="stats">
      <h3>{`You have ${itemAmount} items on your list, and you already packed ${packedItems} (${percentagePacked}%)`}</h3>
    </div>
  );
}
