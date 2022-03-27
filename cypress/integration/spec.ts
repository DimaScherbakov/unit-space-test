describe('Gallery page', () => {
  it('empty on init', () => {
    cy.visit('/')
    cy.get('.search--input').should('not.contain.text').and('not.contain.value')
    cy.get('.gallery--image').should('not.exist')
    cy.get('ngb-pagination').should('not.exist')
  });

  it('display images by input query', () => {
    cy.visit('/')
    cy.get('.search--input').type('#spacecat')
    cy.get('.gallery--image').should('exist')
    cy.get('ngb-pagination').should('exist')
  });

  it('do not change images state if input value is empty string or #', () => {
    cy.visit('/')

    cy.get('.search--input').clear()
    cy.get('.app--hint').invoke('text').should('equal', 'total images count: 0');

    cy.get('.search--input').type('#')
    cy.get('.app--hint').invoke('text').should('equal', 'total images count: 0');
  });
})
