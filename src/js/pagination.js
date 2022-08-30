import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  page: 1,
};
const paganation = new Pagination(
  document.getElementById('pagination'),
  options
);

export { paganation };
