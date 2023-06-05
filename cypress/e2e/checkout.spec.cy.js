describe('Checkout Page', () => {
  beforeEach(() => {
    cy.visit('/checkout')
  })

  it('View field for City input', () => {
    cy.get('#City').should('exist')
  })

  it('View field for Address input', () => {
    cy.get('#address').should('exist')
  })

  it('View field for Phone input', () => {
    cy.get('#Phone').should('exist')
  })

  it('View Submit button', () => {
    cy.get('.bt').should('exist')
  })

  it('Enter and display data', () => {
    const city = 'Kyiv'
    const address = 'Grushevskogo,10'
    const phone = '380999999999'

    cy.get('#City').type(city)
    cy.get('#address').type(address)
    cy.get('#Phone').type(phone)

    cy.get('#City').should('have.value', city)
    cy.get('#address').should('have.value', address)
    cy.get('#Phone').should('have.value', phone)
  })

  it('Click Back to Cart', () => {
    cy.get('.btn.btn-outline-primary').click()

    cy.url().should('include', '/cart')
  })


})
