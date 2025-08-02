describe('Miroir Blog site', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays the site title', () => {
    cy.get('title')
      .should('contain', 'Miroir Blog');
    cy.get('header')
      .contains('Miroir Blog');
  })
  it('displays navigation menu', () => {
    cy.get('nav')
      .should('be.visible')
      .within(() => {
        cy.contains('About');
        cy.contains('Blog');
      });
  })
})