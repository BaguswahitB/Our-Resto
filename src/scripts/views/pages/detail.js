import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/resto-source';
import {
  RestoDetailTemplate,
  RestoFoodsTemplate,
  RestoReviewTemplate,
  RestoDrinksTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-presenter';

const Detail = {
  async render() {
    return `
    <div id="preloder">
    <div class="loader"></div>
  </div>
  <section class="hero">
  </section>
  <section class="content" id="content-restaurant">
    <h1 class="heading">Detail <span>Resto</span></h1>
  <div class="restaurant-box">
    <div id="restaurant" class="cover"></div>
    <div id="likeButtonContainer"></div>
  <div class="content-title">
              <h5>Makanan</h5>
            </div>
  <div id="food" class="section"></div>
  <div class="content-title">
  <h5>Minuman</h5>
</div>
<div id="drink" class="section"></div>
  <div class="content-title">
              <h5>Reviews</h5>
            </div>
  <div id="review" class="section"></div>
  <div class="content-title">
              <h5>
                Add Your Comment
              </h5>
            <form class="section" id="form-review">
              <input type="text" placeholder="Your Name" class="form-name" id="input-name" required />
              <input type="text" placeholder="Your Comment" class="form" id="input-review" required />
              <button type="submit" id="add">
                 Review
              </button>
            </form>
          </div>
  </div>
  </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailRestaurante(url.id);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = RestoDetailTemplate(resto);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        city: resto.city,
        rating: resto.rating,
      },
    });
    const foods = await TheRestoDbSource.menuFoods(url.id);
    const foodContainer = document.querySelector('#food');
    foods.forEach((food) => {
      foodContainer.innerHTML += RestoFoodsTemplate(food);
    });
    const drinks = await TheRestoDbSource.menuFoods(url.id);
    const drinkContainer = document.querySelector('#drink');
    drinks.forEach((drink) => {
      drinkContainer.innerHTML += RestoDrinksTemplate(drink);
    });
    const reviews = await TheRestoDbSource.restoReview(url.id);
    const reviewContainer = document.querySelector('#review');
    reviews.forEach((review) => {
      reviewContainer.innerHTML += RestoReviewTemplate(review);
    });
    const nameinput = document.querySelector('#input-name');
    const reviewinput = document.querySelector('#input-review');
    const reviewsubmit = document.querySelector('#add');
    reviewsubmit.addEventListener('click', async (event) => {
      const review = {
        id: resto.id,
        name: nameinput.value,
        review: reviewinput.value,
      };
      if (nameinput.value === '' || reviewinput.value === '') {
        alert('Required Name and Review');
      } else {
        event.preventDefault();
        await TheRestoDbSource.addReview(review).then(() => {
          location.reload();
        });
        alert('Thanks for Your Review');
      }
    });
    const loadingC = document.querySelector('#preloder');
    loadingC.style.display = 'none';
  },
};

export default Detail;
