import { useEffect, useState } from "react";
import "../index.css";

export default function Stats({ itemAmount, packedItems }) {
  const [percentagePacked, setPercentagePacked] = useState();

  useEffect(() => {
    setPercentagePacked((packedItems / itemAmount) * 100);
  }, [itemAmount, packedItems]);

  return (
    <footer className="stats">
      <h3>👜</h3>
      <em>
        {`You have ${itemAmount} items on your list, and you already packed ${packedItems} (${Math.round(
          percentagePacked
        )}%)`}
      </em>
    </footer>
  );
}
