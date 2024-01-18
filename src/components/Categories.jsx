import { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            className={i === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(i)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;