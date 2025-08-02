describe('Miroir Blog site', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('displays the site title', () => {
    cy.get('title')
      .should('contain', 'Miroir Blog');
  })
  
  it('displays the homepage content', () => {
    // Check for the main heading
    cy.get('h1')
      .should('be.visible')
      .and('contain', 'Quickstart Template');
    
    // Check for the netlify + hugo banner image
    cy.get('img[alt="netlify + hugo banner"]')
      .should('be.visible')
      .and('have.attr', 'src', 'https://user-images.githubusercontent.com/43764894/223559747-e9d7f19d-91bf-46a9-a0cb-8d6a40d3cfa3.png');
    
    // Check for the description heading
    cy.get('h2')
      .should('be.visible')
      .and('contain', 'This is a bare-bones Hugo project that has everything you need to quickly deploy it to Netlify');
  })
})