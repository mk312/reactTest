describe('Toggle', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('should change toggled button', () => {
        cy.get('#filterValue2')
            .next()
            .click()
            .get('#filterValue2')
            .should('be.checked');
    });
});