import LikeButtonInitiator from '../../src/scripts/utils/like-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestoIdb,
    resto,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
