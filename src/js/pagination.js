import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
export {page}

const options = {
  totalItems: 0,
        itemsPerPage: 20,
        visiblePages: 5,
    centerAlign: true,
   page:1,
}
const paganation = new Pagination(document.getElementById('pagination'), options);
const page = paganation.getCurrentPage();

paganation.on('afterMove', popular);

function popular(event) {
  const currentPage = event.page;
  getImg(currentPage).then((photo) => {
renderGallery(photo.data)
  })
}
