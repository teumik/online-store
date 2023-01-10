import { dataController } from '../controller/data.controller';
import { testCart } from '../mocks/mocks';

afterEach(() => {
  dataController.cart.idArray = [];
});

describe('Correct implementation of functions', () => {
  const { cart } = dataController;
  const { reults } = testCart;
  const { fakeCarts } = testCart;

  fakeCarts.forEach((fakeCart, i) => {
    it('returns correct cart`s items count', () => {
      cart.idArray = fakeCart;
      const responce = dataController.cartItemsCount;
      expect(responce).toEqual(reults[i]);
    });
  });
});
