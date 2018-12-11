describe("Signing up", () => {
  it.skip("redirects to the calendar", () => {
    cy.visit('http://localhost:3000')
    cy.get('[id="sign-up-name-entry"]')
      .type('TestName')
    cy.get('[id="sign-up-email-entry"]')
      .type('TestEmail')
    cy.get('[id="sign-up-organization-entry"]')
      .type('TestOrganization')
    cy.get('[id="sign-up-password-entry"]')
      .type('TestPassword')
    cy.get('[id="sign-up-mobile-entry"]')
      .type('07823012312')
    cy.get('[id="sign-up-password-confirmation"]')
      .type('TestPassword')
    cy.get('[id="sign-up-submit"]')
      .click()
    cy.url().should('eq', 'http://localhost:3000/calendar')
  })
})
