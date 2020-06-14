describe('Search', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    const defaultInputValue = "Quentin Tarantino"

    it('has default value Quentin Tarantino', () => {
        cy.get('.js-search-input')
            .should('have.value', defaultInputValue);
    })
    it('update search value in the input', () => {
        const newInputValue = "asd"
        cy.get('.js-search-input')
            .type(newInputValue)
            .should('have.value', defaultInputValue+newInputValue);
    })
});