/* eslint-disable no-undef */
import { itActsAsfavoriteRestoModel } from '../contract/favoriteRestoContract';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllResto()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsfavoriteRestoModel(FavoriteRestoIdb);
});
