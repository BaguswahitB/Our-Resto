import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { RestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div id="preloder">
    <div class="loader"></div>
  </div>
    <section class="hero">
  </section>
  <section class="content" id="content">
    <h1 class="heading">Favorite <span>Resto</span></h1>
    <div class="article-container" id="restaurants"></div>
  </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#restaurants');
    const loadingC = document.querySelector('#preloder');
    loadingC.style.display = 'none';
    if (restaurants.length === 0) {
      restoContainer.innerHTML += '<h2 class="resto-item__not__found">Tidak ada resto untuk ditampilkan</h2>';
    }
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += RestoItemTemplate(resto);
    });
  },
};

export default Like;
