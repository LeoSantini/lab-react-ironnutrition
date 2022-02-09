import { useState } from 'react';

export function FoodBox({ foods }) {
  console.log(foods);

  const [foodQuantity, setFoodQuantity] = useState(0);
  console.log(foodQuantity)

  function handleAdd(event) {
    setFoodQuantity(event.target.value);
  }

  return (
    <div>
      {foods.map((food) => (
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} alt={food.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    min="0"
                    onChange={handleAdd}
                  />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
