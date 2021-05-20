describe('Navigation to a Pokemon page', function() {
    it('opens a specific Pokemon page with its hidden ability', function() {
      cy.visit('http://localhost:5000')
      cy.contains('ivysaur').click()
      cy.contains('chlorophyll')
    })
  })