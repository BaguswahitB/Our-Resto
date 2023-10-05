import Resto from '../views/pages/resto';
import Favorites from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Resto,
  '/resto': Resto,
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;
