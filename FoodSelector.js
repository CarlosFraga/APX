import React, { useState } from "react";

const foodData = {
  2: [
    { category: "BEEF", name: "Filet Mignon", points: 720, meals: 3 },
    { category: "BEEF", name: "Boneless Sirloin", points: 360, meals: 3 },
    { category: "POULTRY", name: "Whole Broilers", points: 120, meals: 2 },
    { category: "POULTRY", name: "Chicken Legs", points: 200, meals: 8 },
  ],
  3: [
    { category: "BEEF", name: "Filet Mignon", points: 660, meals: 2 },
    { category: "BEEF", name: "Boneless Sirloin", points: 420, meals: 2 },
    { category: "POULTRY", name: "Whole Broilers", points: 120, meals: 2 },
    { category: "POULTRY", name: "Chicken Legs", points: 300, meals: 4 },
  ],
  4: [
    { category: "BEEF", name: "Filet Mignon", points: 660, meals: 2 },
    { category: "BEEF", name: "Boneless Sirloin", points: 420, meals: 2 },
    { category: "POULTRY", name: "Whole Broilers", points: 120, meals: 2 },
    { category: "POULTRY", name: "Chicken Legs", points: 300, meals: 4 },
  ],
};

const FoodSelector = () => {
  const [portion, setPortion] = useState(2);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const totalPoints = selectedItems.reduce((sum, item) => sum + item.points, 0);
  const totalMeals = selectedItems.reduce((sum, item) => sum + (item.meals || 0), 0);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-lg font-bold text-center mb-4">Total Points: {totalPoints} | Total Meals: {totalMeals}</h2>
      <label className="block text-center">Select Portion Size:</label>
      <select
        className="border p-2 w-full text-center mt-2"
        value={portion}
        onChange={(e) => {
          setPortion(Number(e.target.value));
          setSelectedItems([]);
        }}
      >
        <option value={2}>2 Adults</option>
        <option value={3}>3 Adults</option>
        <option value={4}>4 Adults</option>
      </select>

      <div className="mt-4 border p-4 rounded-lg">
        {foodData[portion].map((item) => (
          <label key={item.name} className="block p-2 flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedItems.includes(item)}
              onChange={() => toggleItem(item)}
            />
            {item.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FoodSelector;
