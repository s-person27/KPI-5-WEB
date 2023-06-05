import Editprofile from './editprofile.vue'

describe('<Editprofile />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Editprofile)
  })
})