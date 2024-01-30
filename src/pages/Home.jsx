import { useState, useEffect, useContext, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';

import Categories from '../components/Categories';
import Sort, { sortList } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';
import Pagination from '../components/Pagination/index';

import { SearchContext } from '../App';
import About from '../components/about';
import Welcome from '../components/welcome/Welcome';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // параметры пришли из URL?
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchPizzas = () => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://65a91a20219bfa3718687154.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.log(`Ошибка ${error.response.status}, ${error}`);
        }
      });
  };

  // этот хук отвечает за создание строки поиска
  // и передачу параметров в URL
  useEffect(() => {
    // код выполняется, если изменили параметры и был первый рендер
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      // передаем строку запроса в URL
      navigate(`?${queryString}`);
    }
    // первый рендер меняет isMounted с false на true
    // сохраняем информацию о том, что рендер завершился
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // этот хук отвечает за парсинг параметров из URL
  // и сохранение их в Redux
  useEffect(() => {
    // Если был первый рендер, то проверяем URL-параметры и сохраняем их в Redux
    if (window.location.search) {
      // удаляем вопросительный знак из строки
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  // этот useEffect проверяет, нужно ли делать запрос на изменение пицц
  // т.е. если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    window.scrollTo(0, 0);

    // дожидаемся отработки dispatch и только тогда отправляем запрос
    // т.к. иначе отправляются 2 запроса:
    // запрос с initialValue
    // и запрос со параметрами из url
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // TODO исправить ошибку
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  return (
    <>
      <Welcome />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories value={categoryId} onChangeCategory={onChangeCategory} />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">{isLoading ? skeletons : pizzas}</div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
      </div>
      <About />
    </>
  );
}

export default Home;
