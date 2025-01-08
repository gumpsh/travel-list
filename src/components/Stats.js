import "../index.css";

export default function Stats({ items }) {
  if (!items.length) {
    return <p className="stats">Start adding some items to your packing list 🚀</p>;
  }

  const amount = items.length;
  const packed = items.filter((item) => item.packed === true).length;
  const percentage = amount > 0 ? Math.round((packed / amount) * 100) : 0;

  return (
    <footer className="stats">
      <h3>👜</h3>
      {percentage !== 100 ? (
        <em>{`You have ${amount} items on your list, and you already packed ${packed} (${percentage}%)`}</em>
      ) : (
        <em>Everything is packed! Ready to go ✈</em>
      )}
    </footer>
  );
}
