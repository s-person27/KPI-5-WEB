describe('The login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  
  it('Register check', () => {
    cy.get('p.text-center').contains('Sing Up').click(); 
    cy.url().should('include', '/registration');
    });

  it('Register user', () => {
    cy.get('p.text-center').contains('Sing Up').click(); 
    cy.url().should('include', '/registration');
    cy.get('input#username').type('JohnDoe');
    cy.get('input#email').type('johndoe@example.com');
    cy.get('input#password').type('password');
    cy.get('input#confirmPassword').type('password');
    cy.get('select#sex').select('1');
    cy.get('[data-cy=birthday-input]').type('2023-06-03');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
    });

  it('Sign in',()=>{
    cy.get('[data-cy=email-input]').type('admin@admin.com');
    cy.get('[data-cy=password-input]').type('admin');
    cy.get('[data-cy=submit-button]').click();
  });



  

})