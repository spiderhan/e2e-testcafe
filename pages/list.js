import { Selector } from 'testcafe';

export class TestPageProduct {
  constructor() {
    this.headerSearch = Selector('#search-text');
    this.headerSearchButton = Selector('.js-e2e-search');
    this.productBlock = Selector('[alt^="BRITA Maxtra+ Marella Cool Water Filter Jug Annual"]');
    this.addToBasket = Selector('.js-e2e-add-basket');
    this.gotoBasket = Selector('.js-e2e-quickView-basket');

  }
}