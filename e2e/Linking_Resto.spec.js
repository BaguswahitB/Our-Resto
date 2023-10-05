/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked Resto', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak Ada Resto Untuk Ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto then unlike and check empty liked Resto again', ({ I }) => {
  I.see('Tidak Ada Resto Untuk Ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');
  // … kita akan mengisi uji coba berikutnya …
  I.seeElement('#resto-link');
  I.click(locate('#resto-link').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('#restaurants');

  I.seeElement('#resto-link');
  I.click(locate('#resto-link').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('#restaurants');
  I.see('Tidak Ada Resto Untuk Ditampilkan', '.resto-item__not__found');
});
