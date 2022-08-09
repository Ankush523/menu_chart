import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import items from './components/data'
import Menu from './components/Menu';
import Categories from './components/Categories';
function App() {
  const[foodItems,setFoodItems] = useState(items);
  const[categories,setCategories] = useState([]);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category)
    setFoodItems(newItems)
    if(category === 'all')
    {
      setFoodItems(items)
    }
  }
  return (
    <div className="App">
      <div>
        <h2>Our Items</h2>
      </div>
      <div>
        <Categories filterFoods={filterItems}/>
        <Menu items={foodItems}/>
      </div>
    </div>
  );
}

export default App;
