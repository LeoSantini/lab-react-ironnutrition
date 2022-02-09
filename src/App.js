import { useState } from 'react';
import 'bulma/css/bulma.css';
import { FoodBox } from './Components/FoodBox';
import foods from './foods.json';
import Search from './Components/Search';
import TodaysFood from './Components/TodaysFood';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className='container'>
      <h1 className="title">IronNutrition</h1>

      <Search search={search} setSearch={setSearch} />

      <div className='columns'>
        <FoodBox
          foods={foods.filter(food => (food.name).toLowerCase().includes(search.toLowerCase()))}
         className="column"
         />

        <TodaysFood className="column"/>
      </div>

    </div>
  );
}

export default App;
