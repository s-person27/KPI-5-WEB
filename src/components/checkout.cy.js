import Checkout from './checkout.vue'

describe('<Checkout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Checkout)
  })
})