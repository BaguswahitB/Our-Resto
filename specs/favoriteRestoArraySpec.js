/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { itActsAsfavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteResto = [];

const FavoriterestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteResto.find((resto) => resto.id === id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteResto
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteResto.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteResto = favoriteResto.filter((resto) => resto.id !== id);
  },
};

describe('Favorite resto Array Contract Test Implementation', () => {
  afterEach(() => (favoriteResto = []));

  itActsAsfavoriteRestoModel(FavoriterestoArray);
});
