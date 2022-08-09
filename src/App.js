import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import items from './components/data'
import Menu from './components/Menu';
function App() {
  const[foodItems,setFoodItems] = useState(items);
  const[categories,setCategories] = useState([]);
  return (
    <div className="App">
      <div>
        <h2>Our Items</h2>
      </div>
      <div>
        {/* <Categories/> */}
        <Menu items={foodItems}/>
      </div>
    </div>
  );
}

export default App;
