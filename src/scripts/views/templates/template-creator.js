/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const RestoItemTemplate = (restaurants) => `
  <article class="article-item">
  <picture>
  <source type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_SMALL + restaurants.pictureId}" media="all and (max-width: 600px)">
  <source type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_LARGE + restaurants.pictureId}" media="all and (min-width: 601px)">
  <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_LARGE + restaurants.pictureId}" alt="${restaurants.name}">
  </picture>
  <div class="article-content">
    <div class="article-detail">
      <span>Kota : <b>${restaurants.city}</b></span>
      <span>Rating : <b>${restaurants.rating}</b></span>
    </div>
    <span><a href="/#/detail/${restaurants.id}" id="resto-link">${restaurants.name}</a></span>
    <p class="line-clamp">${restaurants.description}</p>
  </div>
</article>
`;

const RestoDetailTemplate = (restaurant) => `
    <picture>
    <source type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_SMALL + restaurant.pictureId}" media="all and (max-width: 600px)">
    <source type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_LARGE + restaurant.pictureId}" media="all and (min-width: 601px)">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_LARGE + restaurant.pictureId}" alt="${restaurant.name}" style="width: 100%;background-size: cover;object-fit: cover;display: block;margin: 0 auto;" />
    </picture>
    <div class="restaurant-detail">
        <h3>${restaurant.name}</h3>
        <span>${restaurant.address} - ${restaurant.city}</span>
      <p>${restaurant.description}</p>
    </div>

`;

const RestoFoodsTemplate = (food) => `
<span>${food.name}</span>
`;
const RestoDrinksTemplate = (drink) => `
<span>${drink.name}</span>
`;

const RestoReviewTemplate = (review) => `
<div class="section">
<div class="review-pic">
<picture>
<source type="image/webp" data-srcset="https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg" media="all and (max-width: 600px)">
<source type="image/jpeg" data-srcset="https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg" media="all and (min-width: 601px)">
<img class="lazyload" data-src="https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg" alt="avatar img" />
</picture>
</div>
<div class="review-text">
  <h6>${review.name} - ${review.date}</h6>
  <p>${review.review}</p>
</div>
</div>
`;

const LikeButton = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const LikedButton = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { RestoItemTemplate, RestoDetailTemplate, LikeButton, LikedButton, RestoFoodsTemplate, RestoReviewTemplate, RestoDrinksTemplate };
