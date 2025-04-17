function Fruits() {
  const availableFruits = [
    {
      id: 1,
      name: "Apple",
      price: 700,
      emoji: "🍎",
      soldout: true,
    },
    {
      id: 2,
      name: "Mango",
      price: 1000,
      emoji: "🥭",
      soldout: false,
    },
    {
      id: 3,
      name: "Pineapple",
      price: 1200,
      emoji: "🍍",
      soldout: true,
    },
  ];

  let message;

  return (
    <ul>
      {availableFruits.map((fruits) => (
        <li key={fruits.id}>
          {fruits.name} ({fruits.emoji}) - ${fruits.price}{" "}
          {fruits.soldout ? <span className="sold-out">Sold Out</span> : ""}
        </li>
      ))}
    </ul>
  );
}

export default Fruits;
