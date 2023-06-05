describe('Edit Profile Page', () => {
  beforeEach(() => {
    cy.visit('/editprofile');
  });

  it('should display the Edit Profile page', () => {
    cy.get('h1').should('contain', 'Edit Profile');
  });

  // it('should fill in the form fields', () => {
  //   const username = 'admin';
  //   const email = 'admin@example.com';
  //   const birthday = '1991-01-01';
  //   const sex = '1';
  
  //  cy.get('#username1').type(username);
  //   cy.get('#useremail').type(email);
  //   cy.get('#bday').type(birthday);
  //   cy.get('#sex').select(sex);
    
  //   cy.get('#username1').should('have.value', username);
  //   cy.get('#useremail').should('have.value', email);
  //   cy.get('#bday').should('have.value', birthday);
  //   cy.get('#sex').should('have.value', sex);
  // });
  //
  // it('should submit the form', () => {
  //   cy.get('#username1').type('JohnDoe');
  //   cy.get('#useremail').type('johndoe@example.com');
  //   cy.get('#bday').type('1990-01-01');
  //   cy.get('#sex').select('2');
  //
  //   cy.get('button[type=submit]').click();
  //
  //   cy.contains('Thank you for your submission').should('be.visible');
  //   cy.url().should('include', '/profile');
  // });
});
