import TheStore from './TheStore.vue'

describe('<TheStore />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TheStore)
  })
})