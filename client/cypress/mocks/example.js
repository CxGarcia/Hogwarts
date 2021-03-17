export const getCartItems = (response, userInfo, type) => {
  let endpoint = '/api/cart/items';
  if (type === 'purchased') {
    endpoint = endpoint.concat('/purchased');
  }
  cy.route({
    method: 'GET',
    url: `${endpoint}?createdBy=${userInfo.userName}`,
    response
  }).as('getCartItems');
};
