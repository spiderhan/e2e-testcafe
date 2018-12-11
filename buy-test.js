import { Selector, RequestLogger, RequestMock, RequestHook  } from 'testcafe';
import { block } from './request_hooks';
import { TestPageProduct } from './pages/product';

const testPageProduct = new TestPageProduct();

//const testPageProduct = new testRequestHook();

//const theHeaders = new testRequestHook('https://www.thehut.com')

fixture`New Fixture`
    .page('https://www.zavvi.com')
    .requestHooks(block);

test ('add to basket journey', async test => {
        await test
            //.debug()
            //.setPageLoadTimeout(3)
            .typeText(testPageProduct.headerSearch, ' ')
            .click(testPageProduct.headerSearchButton)
            .click(testPageProduct.productBlock)
            .wait(2000)
            .click(testPageProduct.addToBasket)
            .click(testPageProduct.gotoBasket);
});