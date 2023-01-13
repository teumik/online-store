import { dataController } from '../src/controller/data.controller';
import { testCart } from '../__mocks__/customMocks';

afterAll(() => {
  dataController.cart.idArray = [];
});

describe('Correct implementation of functions', () => {
  const { cart } = dataController;
  const { fakeCarts, fakeItemRequests } = testCart;

  it('returns correct cart`s items count', () => {
    [,, cart.idArray] = fakeCarts;

    fakeItemRequests.forEach((request) => {
      const responce = dataController.isInCart(request.id);
      expect(responce).toEqual(request.expected);
    });
  });
});
