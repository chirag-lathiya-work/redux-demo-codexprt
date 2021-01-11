import React, { useState } from "react";
import "./App.css";

const categories = [
  {
    id: "all",
    text: "All",
  },
  {
    id: "grocery",
    text: "Grocery",
  },
  {
    id: "fashion",
    text: "Fashion",
  },
  {
    id: "electronics",
    text: "Electronics",
  },
  {
    id: "furniture",
    text: "Furniture",
  },
];

const App = () => {
  const [selectedCategory, setCategory] = useState("all");
  const [todoText, setTodoText] = useState("");
  const onSubmitData = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log("Category : ", selectedCategory);
    console.log("Todo Value : ", todoText);
  };

  return (
    <div className="app">
      <div>
        <span>Select Category</span>
        <select
          name="category"
          defaultValue={selectedCategory}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((obj, indx) => (
            <option key={`${indx}`} value={obj.id}>
              {obj.text}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        <form onSubmit={onSubmitData}>
          <input
            type="text"
            name="todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
