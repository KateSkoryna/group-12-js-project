import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
export {pagination}

///////Этот кусок кода вставляем в функцию рендера карточек и в функцию создания начальной страницы///////

const pagination = new Pagination(document.getElementById('pagination'), {
        totalItems: 0,
        itemsPerPage: 20,
        visiblePages: 5,
        centerAlign: true
  });
pagination.reset(array.total_results);


//////// дальше нужно разобраться как отписываться от событий...........