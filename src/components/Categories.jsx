import { useState } from 'react';

function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} className={i === value ? 'active' : ''} onClick={() => onChangeCategory(i)}>
            <a href="#">{categoryName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
