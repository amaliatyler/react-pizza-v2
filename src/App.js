import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import logo from './logo.svg';

import './App.css';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Маргарита" price="395" />
            <PizzaBlock title="Четыре сыра" price="455" />
            <PizzaBlock title="Маргарита" price="395" />
            <PizzaBlock title="Маргарита" price="395" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
