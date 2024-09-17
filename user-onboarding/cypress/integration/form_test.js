describe('Users App', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000/');
    })

    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsInput = () => cy.get('input[type="checkbox"]');
    const submitBtn = () => cy.get('button[id=submitBtn]');
    const allUsersDiv = () => cy.get('div[id=allUsers]');

    it('first name input contains the names', () => {
        firstNameInput()
            .should('have.value', '')
            .type('Lorem')
            .should('have.value', 'Lorem');

        lastNameInput()
            .should('have.value', '')
            .type('Ipsum')
            .should('have.value', 'Ipsum');
    })
    
    it('takes email input', () => {
        emailInput()
            .should('have.value', '')
            .type('fillupgalbraith@gmail.com')
            .should('have.value', 'fillupgalbraith@gmail.com');
    })

    it('takes password input', () => {
        passwordInput()
            .should('have.value', '')
            .type('DolorSept')
            .should('have.value', 'DolorSept');
    })

    it('Accepts Terms of Service check on checkbox', () => {
        termsInput()
            .should('not.have.checked', "true")
            .check()
            .should('have.checked', "true");
    })

   it('starts with button disabled, and is enabled after form filled out', () => {
        submitBtn().should('have.disabled');
        firstNameInput().type('Lorem');
        lastNameInput().type('Ipsum');
        emailInput().type('fillupgalbraith@gmail.com');
        passwordInput().type('DolorSept');
        termsInput().check();
        submitBtn().should('not.have.disabled');
        submitBtn().click();
        allUsersDiv().contains('Lorem');
    })
    
    it('displays result of form valitdation on empty form', () => {
        submitBtn().should('have.disabled');
    })
})