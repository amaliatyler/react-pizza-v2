import { useState } from 'react';

function PizzaBlock({ imageUrl, title, types, sizes, price }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typesArray = ['тонкое', 'традиционное'];

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza"></img>
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          {/* <ul>
            {types.map((type, i) => (
              <li
                key={i}
                className={activeType === i ? 'active' : ''}
                onClick={() => setActiveType(i)}>
                {typesArray[type]}
              </li>
            ))}
          </ul> */}
          <ul>
            {sizes.map((size, i) => (
              <li
                key={i}
                className={activeSize === i ? 'active' : ''}
                onClick={() => setActiveSize(i)}>
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__flex">
          <div className="pizza-block__price">от {price} ₽</div>
          <div className="pizza-block__counter">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
        <button className="button button--add">Добавить</button>
      </div>
    </div>
  );
}

export default PizzaBlock;
