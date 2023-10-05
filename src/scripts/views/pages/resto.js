import TheRestoDbSource from '../../data/resto-source';
import { RestoItemTemplate } from '../templates/template-creator';

const Resto = {
  async render() {
    return `
    <div id="preloder">
    <div class="loader"></div>
  </div>
  <section class="hero">
  <picture>
  <source type="image/jpeg" data-srcset="/images/heros/hero-image_2-small.jpg" media="all and (max-width: 600px)">
  <source type="image/jpeg" data-srcset="/images/heros/hero-image_2-large.jpg" media="all and (min-width: 601px)">
  <img class="lazyload" data-src="/images/heros/hero-image_2-large.jpg" alt="hero">
  </picture>
  </section>
  <section class="content" id="content">
    <h1 class="heading">Our <span>Resto</span></h1>
    <div class="article-container" id="restaurants"></div>
  </section>
      `;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.listRestaurant();
    const restoContainer = document.querySelector('#restaurants');
    restaurants.slice(0, 18).forEach((resto) => {
      restoContainer.innerHTML += RestoItemTemplate(resto);
    });
    const loadingC = document.querySelector('#preloder');
    loadingC.style.display = 'none';
  },
};

export default Resto;
